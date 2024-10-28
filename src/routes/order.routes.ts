import { Router } from "express";
import { OrderService } from "../services";
import { OrderController } from "../controllers";

export class OrderRoutes {
  static get routes(): Router {
    const router = Router();
    const service = new OrderService();
    const controller = new OrderController(service);

    router.post("/create", controller.createOrder.bind(controller));
    router.post("/confirm", controller.confirmOrder.bind(controller));

    return router;
  }
}
