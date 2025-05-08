import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    jobIdNumeric: { type: String }, // or Number if you want
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    job_link: { type: String },
    seniorityLevel: { type: String },
    employmentType: { type: String },
    source: { type: String },
    experienceRange: { type: String },
    companyUrl: { type: String },
    companyImageUrl: { type: String },
    postedDate: { type: Date },
    min_exp: { type: Number },
    max_exp: { type: Number },
    country: { type: String },
    companytype: { type: String },
    description: { type: String }
  });
  

export default mongoose.model('Job', jobSchema);