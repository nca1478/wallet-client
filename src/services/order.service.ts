import * as soap from "soap";
import { envs } from "../config";
import { soapRoutes } from "../routes/index";
import { Order } from "../entities";

export class OrderService {
  private soapUrl = `${envs.SOAP_BASE_URL + soapRoutes.order}`;
  private client: any;

  constructor() {
    soap.createClient(this.soapUrl, (err, client) => {
      if (err) throw err;
      this.client = client;
    });
  }

  async createOrder(order: Partial<Order>): Promise<Order> {
    return new Promise((resolve, reject) => {
      this.client.createOrder(order, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  async confirmOrder(order: Partial<Order>): Promise<Order> {
    return new Promise((resolve, reject) => {
      this.client.confirmOrder(order, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}
