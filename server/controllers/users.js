'use strict';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Users from '../models/Users';

const controller = {
  authorization: async (req, res) => {
    const isUser = await Users.findOne({
      email: req.body.email
    });
    if (isUser) {
      const isPassword = bcrypt.compareSync(req.body.password, isUser.password);
      if (isPassword) {
        const token = jwt.sign({
          userId: isUser._id,
          email: isUser.email,
          role: isUser.role
        }, process.env.JWT_TOKEN, { expiresIn: '1h' });

        res.status(200).json({
          token: `Bearer ${token}`
        })
      } else {
        res.status(401).json({
          message: 'Неверный пароль!'
        })
      }
    } else {
      res.status(404).json({
        message: 'Пользователь с таким email не найден!'
      })
    }
  },
  registration: async (req, res) => {
    const isUser = await Users.findOne({
      email: req.body.email
    });

    if (isUser) {
      res.status(409).json({
        message: 'Такой email уже занят!'
      })
    } else {
      const salt = bcrypt.genSaltSync(10);
      const password = req.body.password;
      const user = new Users({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt)
      })
      try {
        const sevedUser = await user.save();
        res.status(201).json(sevedUser);
      } catch (err) {
        res.json({ message: err });
      }
    }
  }
};

export default controller;
