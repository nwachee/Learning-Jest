import { Router } from 'express';
import userRoute from './user.route.js';
const router = Router();

router.get('/healthcheck', (req, res) => {
    res.status(200).json({ message: 'Server ok' });
 });

router.use('/user', userRoute)

export default router;
