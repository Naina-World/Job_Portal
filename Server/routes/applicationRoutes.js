import express from 'express';
import {
  applyForJob,
  getMyApplications,
  getJobApplications,
  updateApplicationStatus
} from '../controllers/applicationController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

// Candidate Routes
router.post(
  '/:jobId',
  protect,
  authorize('candidate'),
  upload.single('resume'),
  applyForJob
);

router.get(
  '/my-applications',
  protect,
  authorize('candidate'),
  getMyApplications
);

// Recruiter Routes
router.get(
  '/job/:jobId',
  protect,
  authorize('recruiter', 'admin'),
  getJobApplications
);

router.patch(
  '/:id/status',
  protect,
  authorize('recruiter', 'admin'),
  updateApplicationStatus
);

export default router;
