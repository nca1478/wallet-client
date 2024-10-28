import { Router } from "express";
import {
  CustomerRoutes,
  OrderRoutes,
  UserRoutes,
  WalletRoutes,
} from "./routes/index";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // App routes
    router.use("/api/users", UserRoutes.routes);
    router.use("/api/customers", CustomerRoutes.routes);
    router.use("/api/wallets", WalletRoutes.routes);
    router.use("/api/orders", OrderRoutes.routes);

    return router;
  }
}
