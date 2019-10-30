'use strict';

import Role from '../models/Roles';
import UsersData from '../models/Users.data';

const controller = {
  getRoles: async (req, res) => {
    try {
      const roles = await Role.find();
      res.status(200).json(roles);
    } catch (err) {
      res.json({ message: err });
    }
  },
  createRole: async (req, res) => {
    const role = new Role({
      ...req.body
    });
    try {
      const sevedRole = await role.save();
      res.status(201).json(sevedRole);
    } catch (err) {
      res.json({ message: err });
    }
  },
  getByIdRole: async (req, res) => {
    try {
      const role = await Role.findById(req.params.id);
      res.status(200).json(role);
    } catch (err) {
      res.json({ message: err });
    }
  },
  deleteRole: async (req, res) => {
    try {
      const removeRole = await Role.remove({ _id: req.params.id });
      res.status(200).json(removeRole);
    } catch (err) {
      res.json({ message: err });
    }
  },
  updateRole: async (req, res) => {
    try {
      const updateRole = await Role.updateOne(
        { _id: req.params.roleId },
        {
          $set: {
            ...req.body
          }
        }
      );
      res.status(200).json(updateRole);
    } catch (err) {
      res.json({ message: err });
    }
  }
};

export default controller;
