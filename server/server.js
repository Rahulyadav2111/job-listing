import express from 'express';
import dotenv from 'dotenv';
import jobRoutes from './routes/Jobs.js';
import connectDB from './config/db.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/jobs', jobRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});