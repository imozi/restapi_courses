'use strict';

import Leader from '../models/Leader';

const controller = {
  getLeaders: async (req, res) => {
    try {
      const leaders = await Leader.find();
      res.status(200).json(leaders);
    } catch (err) {
      res.json({ message: err });
    }
  },
  createLeader: async (req, res) => {
    const leader = new Leader({
      ...req.body
    });
    try {
      const sevedLeader = await leader.save();
      res.status(201).json(sevedLeader);
    } catch (err) {
      res.json({ message: err });
    }
  },
  getByIdLeader: async (req, res) => {
    try {
      const leader = await Leader.findById(req.params.id);
      res.status(200).json(leader);
    } catch (err) {
      res.json({ message: err });
    }
  },
  deleteLeader: async (req, res) => {
    try {
      const removeLeader= await Leader.remove({ _id: req.params.id });
      res.status(200).json(removeLeader);
    } catch (err) {
      res.json({ message: err });
    }
  },
  updateLeader: async (req, res) => {
    try {
      const updateLeader = await Leader.updateOne(
        { _id: req.params.supervisorId },
        {
          $set: {
            ...req.body
          }
        }
      );
      res.status(200).json(updateLeader);
    } catch (err) {
      res.json({ message: err });
    }
  }
};

export default controller;
