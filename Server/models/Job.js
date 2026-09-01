import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    location: { type: String, required: true },
    jobType: { 
      type: String, 
      enum: ['Full-Time', 'Part-Time', 'Contract', 'Remote'], 
      default: 'Full-Time' 
    },
    salary: { type: String },
    description: { type: String, required: true },
    postedBy: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    }
  },
  { timestamps: true }
);

export default mongoose.model('Job', jobSchema);