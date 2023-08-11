import Router from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import fileController from '../controller/fileController.js';


const fileRouter = new Router();

fileRouter.post('', authMiddleware, fileController.createDir);
fileRouter.post('/upload', authMiddleware, fileController.uploadFile);
fileRouter.get('', authMiddleware, fileController.getFiles);

export default fileRouter