import { Router } from "express";
import { UserRoutes } from "./routes/user.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // App routes
    router.use("/api/users", UserRoutes.routes);

    return router;
  }
}
