'use strict';

import Supervisors from '../models/Supervisor';

const controller = {
  getSupervisors: async (req, res) => {
    try {
      const supervisors = await Supervisors.find();
      res.status(200).json(supervisors);
    } catch (err) {
      res.json({ message: err });
    }
  },
  createSupervisor: async (req, res) => {
    const supervisor = new Supervisors({
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
      const data = await Supervisors.findById(req.params.id);
      res.status(200).json(data);
    } catch (err) {
      res.json({ message: err });
    }
  },
  deleteSupervisor: async (req, res) => {
    try {
      const removeSupervisor = await Supervisors.remove({ _id: req.params.id });
      res.status(200).json(removeSupervisor);
    } catch (err) {
      res.json({ message: err });
    }
  },
  updateSupervisor: async (req, res) => {
    try {
      const updateSupervisor = await Supervisors.updateOne(
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
