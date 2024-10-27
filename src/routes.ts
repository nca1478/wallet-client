import { Router } from "express";
import { CustomerRoutes, UserRoutes } from "./routes/index";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // App routes
    router.use("/api/users", UserRoutes.routes);
    router.use("/api/customers", CustomerRoutes.routes);

    return router;
  }
}
