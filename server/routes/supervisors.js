'use strict';

import express from 'express';
import passport from 'passport';
import controller from '../controllers/supervisors';
import acl from '../middleware/acl';

const supervisorsRoute = express.Router();

supervisorsRoute.get('/', passport.authenticate('jwt', {session: false}), acl, controller.getSupervisors);

supervisorsRoute.post('/', controller.createSupervisor);

supervisorsRoute.get('/id=:id', passport.authenticate('jwt', {session: false}), acl, controller.getByIdSupervisor);

supervisorsRoute.delete('/:id', controller.deleteSupervisor);

supervisorsRoute.patch('/:id', controller.updateSupervisor);

export default supervisorsRoute;
