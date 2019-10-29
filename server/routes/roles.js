import express from 'express';
import passport from 'passport';
import controller from '../controllers/roles'
import acl from '../middleware/acl';

const rolesRoute = express.Router();

rolesRoute.get('/', passport.authenticate('jwt', {session: false}), acl, controller.getRoles);

rolesRoute.post('/', passport.authenticate('jwt', {session: false}), acl, controller.createRole);

rolesRoute.get('/id=:id', passport.authenticate('jwt', {session: false}), acl, controller.getByIdRole);

rolesRoute.delete('/id=:id', passport.authenticate('jwt', {session: false}), acl, controller.deleteRole);

rolesRoute.patch('/id=:id', passport.authenticate('jwt', {session: false}), acl, controller.updateRole);

export default rolesRoute;
