import express from 'express';
import { addNewExercise } from '../controllers/exericese/exerciseController.js';
import { protect } from '../middleware/authMiddleware.js';

const router=express.Router()

router.route('/').post(protect, addNewExercise)

export default router