import express from 'express'
import authController from '../Controllers/auth.controller.js';
import validate from '../middlewares/validator.js';
import auth from '../middlewares/auth.js';
import { forgotPasswordSchema, loginSchema, registerSchema, resetPasswordSchema } from '../libs/schemas/auth.schema.js';

const router = express.Router();

//Path: /api/auth/login
//Path:/api/auth/register
router.post("/login",validate(loginSchema), authController.login);
router.post("/register",validate(registerSchema), authController.register);

router.post("/forgot-password", validate(forgotPasswordSchema), authController.forgotPassword);
router.post("/reset-password", validate(resetPasswordSchema), authController.resetPassword);

// Used by the frontend on page load/refresh to check if the authToken cookie
// is still valid and to fetch the current user.
router.get("/me", auth, authController.me);
router.post("/logout", authController.logout);

export default router;