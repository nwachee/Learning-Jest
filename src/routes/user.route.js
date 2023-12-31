import { Router } from 'express';
import {
register,
mailer,
 findUser,
updateUser,
findAllUser,
deleteUser} from '../controllers/user.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { registerUser, userUpdate } from '../schemas/index.schema.js';

const router = Router();

router.post('/', validate(registerUser), register)
router.post('/invite', mailer)
router.get('/:id', findUser)
router.patch('/:id', validate(userUpdate), updateUser)
router.get('/', findAllUser)
router.delete('/:id', deleteUser)

export default router; 

