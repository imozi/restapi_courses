'use strict';

import passportJwt from 'passport-jwt';
import Users from '../models/Users'

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_TOKEN
}

export default (passport) => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const user = await Users.findById(payload.userId).select('id');

        user ? done(null, user) : done(null, false);
      } catch (err) {
        res.json({ message: err });
      }
    })
  )
};
