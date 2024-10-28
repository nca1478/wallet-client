import { Request, Response } from "express";
import { responseError, responseGET, responsePOST } from "../utils";
import { WalletService } from "../services";

export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  private handleError = (error: any, res: Response) => {
    const response = responseError({
      msg: error.message,
    });

    return res.status(500).json(response);
  };

  async rechargeWallet(req: Request, res: Response) {
    try {
      const wallet = await this.walletService.rechargeWallet(req.body);
      res.status(201).json(responsePOST(wallet));
    } catch (error: any) {
      this.handleError(error, res);
    }
  }

  async getAvailableWallet(req: Request, res: Response) {
    try {
      const wallet = await this.walletService.getAvailableWallet(req.body);
      res.status(200).json(responsePOST(wallet));
    } catch (error: any) {
      this.handleError(error, res);
    }
  }
}
