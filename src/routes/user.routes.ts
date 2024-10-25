import { Router } from "express";
import { UserService } from "../services";
import { UserController } from "../controllers";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const service = new UserService();
    const controller = new UserController(service);

    router.post("/", controller.createUser.bind(controller));
    router.get("/:id", controller.getUser.bind(controller));
    router.get("/", controller.getAllUsers.bind(controller));
    router.put("/:id", controller.updateUser.bind(controller));
    router.delete("/:id", controller.deleteUser.bind(controller));

    return router;
  }
}
