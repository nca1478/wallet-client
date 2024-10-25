import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const userController = new UserController();

router.post("/users", userController.createUser.bind(userController));
router.get("/users/:id", userController.getUser.bind(userController));
router.get("/users", userController.getAllUsers.bind(userController));
router.put("/users/:id", userController.updateUser.bind(userController));
router.delete("/users/:id", userController.deleteUser.bind(userController));

export default router;
