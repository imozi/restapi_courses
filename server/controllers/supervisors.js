'use strict';

import supervisors from '../models/Supervisor';

const controller = {
  getSupervisors: async (req, res) => {
    try {
      const data = await supervisors.find();
      res.status(200).json(data);
    } catch (err) {
      res.json({ message: err });
    }
  },
  createSupervisor: async (req, res) => {
    const supervisor = new supervisors({
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
      const data = await supervisors.findById(req.params.id);
      res.status(200).json(data);
    } catch (err) {
      res.json({ message: err });
    }
  },
  deleteSupervisor: async (req, res) => {
    try {
      const removeSupervisor = await supervisor.remove({ _id: req.params.id });
      res.status(200).json(removeSupervisor);
    } catch (err) {
      res.json({ message: err });
    }
  },
  updateSupervisor: async (req, res) => {
    try {
      const updateSupervisor = await supervisors.updateOne(
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
