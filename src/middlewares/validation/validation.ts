import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { IVerifyOptions } from 'passport-local';
import { User } from '@prisma/client';

// VALIDATION CHECKS FOR FIELDS WILL BE MOVED TO THE FRONTEND.....

// const validator = async (
//   schemaName: Joi.ObjectSchema,
//   body: object,
//   next: NextFunction
// ) => {
//   const value = await schemaName.validate(body, {
//     abortEarly: false, // include all errors
//     allowUnknown: true, // ignore unknown props
//     stripUnknown: true, // remove unknown props
//   });

//   try {
//     // eslint-disable-next-line no-unused-expressions
//     value.error
//       ? next(createHttpError(422, value.error.details[0].message))
//       : next();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default validator;

export function loginUserValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  passport.authenticate(
    'local',
    { session: false },
    (err: Error, user: User, info: IVerifyOptions) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res
          .status(400)
          .json({ message: info ? info.message : 'Login failed' });
      }
      req.user = user; // Attach the user to the request object
      next(); // Proceed to the next middleware/controller
    }
  )(req, res, next);
}
