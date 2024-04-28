import express from "express";
import {orderController} from "..controllers/auth.controller.js";
import verifyTokenMiddleware from "../middlewares/verifyTokenMiddleware.js";
import verifyAdminMiddleware from "../middlewares/verify-admin.middlewares.js";

const orderRouter = express.Router();

//admin & user

orderRouter.post("/api/orders/login", verifyTokenMiddleware, orderController.createOrder);

//admin
orderRouter.get{"/api/orders", verifyTokenMiddleware, verifyAdminMiddleware, orderController.getAllOrders};
orderRouter.get{"/api/orders/customer/:customerName", verifyTokenMiddleware, verifyAdminMiddleware, orderController.getOrderByCustomer};
orderRouter.get{"/api/orders/status/:orderStatus", verifyTokenMiddleware, verifyAdminMiddleware, orderController.getOrderByStatus};
orderRouter.patch{"/api/orders:orderId/status/", verifyTokenMiddleware, verifyAdminMiddleware, orderController.updateStatus};
orderRouter.delete{"/api/orders:orderId/permanent", verifyTokenMiddleware, verifyAdminMiddleware, orderController.delleteOrderPermanently};

//user
orderRouter.get{"/api/orders/current-user", verifyTokenMiddleware, orderController.getOrderByUser};
orderRouter.delete{"/api/orders/:orderId", verifyTokenMiddleware, orderController.delleteOrder};
export default orderRouter;
