import Router from "express";
import authController from '../controller/authController.js'
import { check } from 'express-validator'

const router = new Router();

router.post('/registration', [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longer than 3 and shoeter than 10').isLength({ max: 10, min: 3 }),
    check('username', 'Username must be longer than 2 and shoeter than 10').isLength({ max: 10, min: 2 }),
], authController.registration);
router.post('/login', authController.login);

export default router;
