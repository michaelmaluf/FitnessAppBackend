import { Request, Response, NextFunction } from 'express';
import { User } from '@prisma/client';

import jwt from 'jsonwebtoken';
import passport from 'passport';
import { IVerifyOptions } from 'passport-local';

export function isAuth(req: Request, res: Response, next: NextFunction) {
  passport.authenticate(
    'jwt',
    { session: false },
    (err: Error, user: User, info: IVerifyOptions) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res
          .status(400)
          .json({ message: info ? info.message : 'Invalid JWT' });
      }
      req.user = user; // Attach the user to the request object
      next(); // Proceed to the next middleware/controller
    }
  )(req, res, next);
}

export default isAuth;
