import { Router } from "express";
import { getUsers, postUsers } from '../controllers/users.controller.js'
const router = Router();

router.route('/').get(getUsers).post(postUsers);

export default router;