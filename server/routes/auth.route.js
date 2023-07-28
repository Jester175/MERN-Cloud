import Router from "express";
import authController from '../controller/authController.js'
import { check } from 'express-validator'
import authMiddleware from '../middleware/auth.middleware.js'

const authRouter = new Router();

authRouter.post('/registration', [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longer than 3 and shoeter than 10').isLength({ max: 10, min: 3 }),
    check('username', 'Username must be longer than 2 and shoeter than 10').isLength({ max: 10, min: 2 }),
], authController.registration);
authRouter.post('/login', authController.login);
authRouter.get('/auth', authMiddleware, authController.auth);

export default authRouter;
