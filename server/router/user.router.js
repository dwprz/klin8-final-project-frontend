import express from "express";
import {userController} from "..controllers/auth.controller.js";
import verifyTokenMiddleware from "../middlewares/verifyTokenMiddleware.js";
import uploadPhotoProfile from "../middlewares/upload-photo-profile.middlewares.js";
import processingImageMiddleware from "../middlewares/processing-image.middlewares.js";
import verifyAdminMiddleware from "../middlewares/verify-admin.middlewares.js";



const userRouter = express.Router();


userRouter.get{"/api/users", verifyTokenMiddleware, verifyAdminMiddleware, userController.getallByRole};
userRouter.patch{"/api/users/current", verifyTokenMiddleware, userController.updateUser};
userRouter.patch{"/api/users/current/password", verifyTokenMiddleware, userController.updatePassword};
userRouter.post{"/api/users/current/email", verifyTokenMiddleware, userController.updateEmail};
userRouter.post{"/api/users/current/photo-profile", verifyTokenMiddleware, uploadPhotoProfile.single('photoProfile'),processingImageMiddleware, userController.uploadPhotoProfile};


export default userRouter;