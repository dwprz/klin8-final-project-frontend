import express from "express";
import {authController} from "..controllers/auth.controller.js";
import verifyTokenMiddleware from "../middlewares/verifyTokenMiddleware.js";

const authRouter = express.Router();

//admin & user

authRouter.post("/api/users/login", authController.login);

//user
authRouter.post{"/api/users/send-otp", authController.sendOtp};
authRouter.post{"/api/users/verify-otp", authController.verifyOtp};
authRouter.post{"/api/users/register", authController.register};
authRouter.post{"/api/users/login-google", authController.loginGoogle};
authRouter.post{"/api/refresh-token", authController.refreshToken};
authRouter.post{"/api/users/send-otp", authController.sendOtp};
authRouter.patch{"/api/users/Current/logout", verifyTokenMiddleware, authController.logout};

export default authRouter;
