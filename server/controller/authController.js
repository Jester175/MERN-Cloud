import User from '../models/User.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { validationResult } from 'express-validator';
import fileServices from "../services/fileServices.js";
import File from "../models/File.js";
dotenv.config();

class authController {
    async registration(req, res) {
        try {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: `Uncorrect request`, errors });
            }
            const { username, password, email } = req.body;
            const candidate = await User.findOne({ email });
            if (candidate) {
                return res.status(400).json({ message: `User with email ${email} already exist` });
            }
            const hashPassword = await bcryptjs.hash(password, 8);
            const user = new User({ username, password: hashPassword, email });
            await user.save();
            await fileServices.createDir(new File({ user: user.id, name: '' }));
            return res.status(201).json({ message: `User was created` });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'Server error' });
        }
    }

    async login(req, res) {
        try {
            const { password, email } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: `User not found` });
            }
            const isPassValid = bcryptjs.compareSync(password, user.password);
            if (!isPassValid) {
                return res.status(400).json({ message: `Invalid password` });
            }
            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
            return res.status(200).json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username
                }
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'Server error' });
        }
    }

    async auth(req, res) {
        try {
            const user = await User.findOne({ _id: req.user.id })
            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
            return res.status(200).json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username
                }
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'Server error' });
        }
    }
}

export default new authController();