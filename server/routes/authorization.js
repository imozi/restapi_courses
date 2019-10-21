import express from 'express';
import controller from '../controllers/users';

const usersRoute = express.Router();

usersRoute.post('/login', controller.authorization);
usersRoute.post('/registration', controller.registration);


export default usersRoute;
