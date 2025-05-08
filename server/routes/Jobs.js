import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { location, page = 1, limit = 10 } = req.query;
    const query = {};

    if (location) {
      const locations = location.split(',').map(loc => loc.trim());
      query.location = { $in: locations.map(loc => new RegExp(loc, 'i')) };
    }

    const jobs = await Job.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const totalJobs = await Job.countDocuments(query);
    const totalPages = Math.ceil(totalJobs / limit);

    res.json({
      jobs,
      totalJobs,
      totalPages,
      currentPage: parseInt(page),
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;