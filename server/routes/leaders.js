'use strict';

import express from 'express';
import passport from 'passport';
import controller from '../controllers/leader';
import acl from '../middleware/acl';

const leadersRoute = express.Router();

leadersRoute.get('/', passport.authenticate('jwt', {session: false}), acl, controller.getLeaders);

leadersRoute.post('/', controller.createLeader);

leadersRoute.get('/id=:id', passport.authenticate('jwt', {session: false}), acl, controller.getByIdLeader);

leadersRoute.delete('/:id', controller.deleteLeader);

leadersRoute.patch('/:id', controller.updateLeader);

export default leadersRoute;
