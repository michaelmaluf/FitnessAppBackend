import { Request, Response } from 'express';
import { User } from '@prisma/client';

import jwt from 'jsonwebtoken';

export function loginController(req: Request, res: Response) {
  const user: User | undefined = req.user as User | undefined;

  if (!user) {
    return res.status(401).json({ message: 'User not authenticated' });
  }

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    // Handle missing JWT_SECRET environment variable
    console.error('JWT_SECRET is not defined');
    return res.status(500).json({ message: 'Internal server error' });
  }

  const token = jwt.sign({ userId: user.userId }, jwtSecret, {
    expiresIn: '1h',
  });

  return res.json({ user, token });
}
