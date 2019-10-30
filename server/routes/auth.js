import express from 'express';
import controller from '../controllers/auth';

const authRoute = express.Router();

authRoute.post('/login', controller.singIn);
authRoute.post('/join', controller.singUp);


export default authRoute;
