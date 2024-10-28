import { Router } from "express";
import { WalletService } from "../services";
import { WalletController } from "../controllers";

export class WalletRoutes {
  static get routes(): Router {
    const router = Router();
    const service = new WalletService();
    const controller = new WalletController(service);

    router.post("/recharge", controller.rechargeWallet.bind(controller));
    router.post(
      "/get-available",
      controller.getAvailableWallet.bind(controller)
    );

    return router;
  }
}
