'use strict';

import Supervisor from '../models/Supervisors';

const controller = {
  getSupervisors: async (req, res) => {
    try {
      const supervisors = await Supervisor.find();
      res.status(200).json(supervisors);
    } catch (err) {
      res.json({ message: err });
    }
  },
  createSupervisor: async (req, res) => {
    const supervisor = new Supervisor({
      ...req.body
    });
    try {
      const sevedSupervisor = await supervisor.save();
      res.status(201).json(sevedSupervisor);
    } catch (err) {
      res.json({ message: err });
    }
  },
  getByIdSupervisor: async (req, res) => {
    try {
      const supervisor = await Supervisor.findById(req.params.id);
      res.status(200).json(supervisor);
    } catch (err) {
      res.json({ message: err });
    }
  },
  deleteSupervisor: async (req, res) => {
    try {
      const removeSupervisor = await Supervisor.remove({ _id: req.params.id });
      res.status(200).json(removeSupervisor);
    } catch (err) {
      res.json({ message: err });
    }
  },
  updateSupervisor: async (req, res) => {
    try {
      const updateSupervisor = await Supervisor.updateOne(
        { _id: req.params.supervisorId },
        {
          $set: {
            ...req.body
          }
        }
      );
      res.status(200).json(updateSupervisor);
    } catch (err) {
      res.json({ message: err });
    }
  }
};

export default controller;
