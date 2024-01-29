import express from 'express';

import { isAuth } from '@src/middlewares';

import { loginUserValidation } from '@src/middlewares/validation/validation';

import { loginController } from '@src/controllers';

const router = express.Router();

router.post('/signup');
router.post('/login', loginUserValidation, loginController);
// router.get('/me', isAuth, getAuthProfileController);

router.get('/meme', (req, res) => {
  res.send('Hello, the server is up and running!');
});

export default router;

// sign up user flow logic
// route -> signupuservalidation which ensure all applicable information has been entered -> signupcontroller -> signupservice where the logic exists for creating a new user

// login user flow logic
// logic -> loginuservalidation which ensures email and password are provided -> logincontroller -> loginservice where logic for generating jwt and refresh token exist
