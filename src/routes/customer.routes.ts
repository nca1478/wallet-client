import { Router } from "express";
import { CustomerService } from "../services";
import { CustomerController } from "../controllers";

export class CustomerRoutes {
  static get routes(): Router {
    const router = Router();
    const service = new CustomerService();
    const controller = new CustomerController(service);

    router.post("/", controller.createCustomer.bind(controller));
    router.get("/:id", controller.getCustomer.bind(controller));
    router.get("/", controller.getAllCustomers.bind(controller));
    router.put("/:id", controller.updateCustomer.bind(controller));
    router.delete("/:id", controller.deleteCustomer.bind(controller));

    return router;
  }
}
