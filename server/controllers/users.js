'use strict';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Users from '../models/Users';

const controller = {
  authorization: async (req, res) => {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (user) {
      const validPassword = bcrypt.compareSync(password, user.password);
      if (validPassword) {
        const token = jwt.sign({
          userId: user._id,
          email: user.email,
          role: user.role
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
    const { email, password } = req.body;

    const user = await Users.findOne({ email });

    if (user) {
      res.status(409).json({
        message: 'Такой email уже занят!'
      })
    } else {
      const salt = bcrypt.genSaltSync(10);
      const newUser = new Users({
        email: email,
        password: bcrypt.hashSync(password, salt)
      })
      try {
        const seveNewUser = await newUser.save();
        res.status(201).json(seveNewUser);
      } catch (err) {
        res.json({ message: err });
      }
    }
  }
};

export default controller;
