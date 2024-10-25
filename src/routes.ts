import { Router } from "express";
import { UserRoutes } from "./routes/index";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // App routes
    router.use("/api/users", UserRoutes.routes);

    return router;
  }
}
