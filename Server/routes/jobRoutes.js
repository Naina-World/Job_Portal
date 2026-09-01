import express from 'express';
import { getJobs, createJob, getMyJobs, deleteJob } from '../controllers/jobController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// 1. Place specific static routes first
router.get('/my-jobs', protect, authorize('recruiter', 'admin'), getMyJobs);

// 2. Then general routes
router.get('/', getJobs);
router.post('/', protect, authorize('recruiter', 'admin'), createJob);
router.delete('/:id', protect, authorize('recruiter', 'admin'), deleteJob);

export default router;