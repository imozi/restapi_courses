'use strict';

import express from 'express';
import controller from '../controllers/supervisors'

const supervisorsRoute = express.Router();

supervisorsRoute.get('/', controller.getSupervisors);

supervisorsRoute.post('/', controller.createSupervisor);

supervisorsRoute.get('/:supervisorId', controller.getByIdSupervisor);

supervisorsRoute.delete('/:supervisorId', controller.deleteSupervisor);

supervisorsRoute.patch('/:supervisorId', controller.updateSupervisor);

export default supervisorsRoute;