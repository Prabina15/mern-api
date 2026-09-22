import ResetPassword from "../models/ResetPassword.js";
import authService from "../services/auth.service.js"
import jwt from "../utils/jwt.js";
import config from "../config/config.js";

// Shared cookie options: httpOnly so client-side JS (and XSS) can't read the
// token, sameSite "lax" works for the same-site-but-cross-port localhost
// setup and for a real deployment behind one domain; secure is required by
// browsers whenever sameSite is "none", which we only need if frontend and
// backend end up on two different domains in production.
const authCookieOptions = {
  httpOnly: true,
  maxAge: 86400 * 1000,
  secure: config.isProduction,
  sameSite: config.isProduction ? "none" : "lax",
};

const login = async (req, res)=>{
    const input = req.body;
   try{
       const user = await authService.login(req.body);

       const token = jwt.createToken(user);

       res.cookie("authToken", token, authCookieOptions);

       res.json({ user, token });
    } catch (error) {
    res.status(error.status || 400).send(error.message);

   }
   
}

const register = async (req, res)=>{
     const input= req.body;
   try{

       const user = await authService.register(input);

       
       const token = jwt.createToken(user);

       res.cookie("authToken", token, authCookieOptions);

       res.json({ user, token });
   } catch (error) {
    res.status(error.status || 400).send(error.message);

   };
   
};

// GET /api/auth/me - returns the currently logged in user based on the
// authToken cookie (validated by the `auth` middleware, which sets req.user).
const me = async (req, res) => {
  try {
    res.json({ user: req.user });
  } catch (error) {
    res.status(error.status || 400).send(error.message);
  }
};

// POST /api/auth/logout - clears the authToken cookie.
const logout = async (req, res) => {
  try {
    res.clearCookie("authToken", {
      httpOnly: authCookieOptions.httpOnly,
      secure: authCookieOptions.secure,
      sameSite: authCookieOptions.sameSite,
    });
    res.json({ message: "Logged out successfully." });
  } catch (error) {
    res.status(error.status || 400).send(error.message);
  }
};

const forgotPassword = async (req, res)=>{
     const input= req.body;
   try{

       const data = await authService.forgotPassword(input?.email);

       res.json(data);
   } catch (error) {
    res.status(error.status || 400).send(error.message);

   };
   
};
const resetPassword = async (req, res)=>{
     const input= req.body;
   try{

       const data = await authService.resetPassword(input);


       res.json(data);
   } catch (error) {
    res.status(error.status || 400).send(error.message);

   };
   
};


export default {register, login, forgotPassword, resetPassword, me, logout};