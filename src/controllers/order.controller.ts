import { Request, Response } from "express";
import { responseError, responsePOST } from "../utils";
import { OrderService } from "../services";

export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  private handleError = (error: any, res: Response) => {
    const response = responseError({
      msg: error.message,
    });

    return res.status(500).json(response);
  };

  async createOrder(req: Request, res: Response) {
    try {
      const order = await this.orderService.createOrder(req.body);
      res.status(201).json(responsePOST(order));
    } catch (error: any) {
      this.handleError(error, res);
    }
  }

  async confirmOrder(req: Request, res: Response) {
    try {
      const confirmedOrder = await this.orderService.confirmOrder(req.body);
      res.status(201).json(responsePOST(confirmedOrder));
    } catch (error: any) {
      this.handleError(error, res);
    }
  }
}
