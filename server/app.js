'use strict';

import express from 'express';
import cors from 'cors';
import passport from 'passport';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import logging from './logging';
import checkPassport from './middleware/passport'
import leadersRoute from './routes/leaders';
import authRoute from './routes/auth';
import rolesRoute from './routes/roles';

const app = express();

//Middleware
app.use(passport.initialize());
checkPassport(passport);

// log only 4xx and 5xx responses write to file
app.use(morgan('combined', logging.error));
// log only 2xx and 3xx responses write to file
app.use(morgan('combined', logging.access));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('<h1>This is courses server!</h1>');
});

//Routes
app.set('json spaces', 2);
app.use('/api/auth', authRoute);
app.use('/api/leader', leadersRoute);
app.use('/api/roles', rolesRoute);

export default app;
