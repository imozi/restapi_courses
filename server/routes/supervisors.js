'use strict';

import express from 'express';
import passport from 'passport';
import controller from '../controllers/supervisors'

const supervisorsRoute = express.Router();

supervisorsRoute.get('/', passport.authenticate('jwt', {session: false}), controller.getSupervisors);

supervisorsRoute.post('/', controller.createSupervisor);

supervisorsRoute.get('/:id', controller.getByIdSupervisor);

supervisorsRoute.delete('/:id', controller.deleteSupervisor);

supervisorsRoute.patch('/:id', controller.updateSupervisor);

export default supervisorsRoute;
