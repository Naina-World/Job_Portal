import Application from '../models/Application.js';
import Job from '../models/Job.js';
import fs from 'fs';
import path from 'path';

// @desc    Apply for a job (Candidate)
// @route   POST /api/applications/:jobId
export const applyForJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { coverLetter = '' } = req.body;

    const job = await Job.findById(jobId);
    if (!job) {
      if (req.file) {
        fs.unlink(path.resolve(process.cwd(), 'uploads', 'resumes', req.file.filename), () => {});
      }
      return res.status(404).json({ message: 'Job not found' });
    }

    const existingApplication = await Application.findOne({
      job: jobId,
      candidate: req.user._id
    });

    if (existingApplication) {
      if (req.file) {
        fs.unlink(path.resolve(process.cwd(), 'uploads', 'resumes', req.file.filename), () => {});
      }
      return res.status(400).json({ message: 'You have already applied for this job' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Please upload your resume.' });
    }

    const resumeUrl = `/uploads/resumes/${req.file.filename}`;

    const application = await Application.create({
      job: jobId,
      candidate: req.user._id,
      resume: resumeUrl,
      coverLetter
    });

    res.status(201).json({
      message: 'Application submitted successfully',
      application
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get logged-in candidate's applications
// @route   GET /api/applications/my-applications
export const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({ candidate: req.user._id })
      .populate('job', 'title company location jobType salary')
      .sort({ createdAt: -1 });

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all applications for a specific job (Recruiter view)
// @route   GET /api/applications/job/:jobId
export const getJobApplications = async (req, res) => {
  try {
    const { jobId } = req.params;

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (
      job.postedBy.toString() !== req.user._id.toString() &&
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({ message: 'Not authorized to view these applications' });
    }

    const applications = await Application.find({ job: jobId })
      .populate('candidate', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update application status (Recruiter view)
// @route   PATCH /api/applications/:id/status
export const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const application = await Application.findById(req.params.id).populate('job');

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    if (
      application.job.postedBy.toString() !== req.user._id.toString() &&
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({ message: 'Not authorized to update status' });
    }

    application.status = status;
    await application.save();

    res.status(200).json({
      message: 'Application status updated',
      application
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
