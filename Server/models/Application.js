import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      required: true
    },
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    resume: {
      type: String,
      required: [true, 'Please upload your resume']
    },
    coverLetter: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['Pending', 'Reviewed', 'Interviewing', 'Accepted', 'Rejected'],
      default: 'Pending'
    }
  },
  { timestamps: true }
);

applicationSchema.index({ job: 1, candidate: 1 }, { unique: true });

export default mongoose.model('Application', applicationSchema);
