import { Router } from "express";
import { UserController } from "../controllers/user.controller";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new UserController();

    router.post("/", controller.createUser.bind(controller));
    router.get("/:id", controller.getUser.bind(controller));
    router.get("/", controller.getAllUsers.bind(controller));
    router.put("/:id", controller.updateUser.bind(controller));
    router.delete("/:id", controller.deleteUser.bind(controller));

    return router;
  }
}
