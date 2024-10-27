import { Request, Response } from "express";
import { responseError, responseGET, responsePOST } from "../utils";
import { CustomerService } from "../services";

export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  private handleError = (error: any, res: Response) => {
    const response = responseError({
      msg: error.message,
    });

    return res.status(500).json(response);
  };

  async createCustomer(req: Request, res: Response) {
    try {
      const customer = await this.customerService.createCustomer(req.body);
      res.status(201).json(responsePOST(customer));
    } catch (error: any) {
      this.handleError(error, res);
    }
  }

  async getCustomer(req: Request, res: Response) {
    try {
      const customer = await this.customerService.getCustomer(req.params.id);
      res.status(200).json(responseGET(null, customer));
    } catch (error: any) {
      this.handleError(error, res);
    }
  }

  async getAllCustomers(req: Request, res: Response) {
    try {
      const customers = await this.customerService.getAllCustomers();
      res.status(200).json(responseGET(null, customers));
    } catch (error: any) {
      this.handleError(error, res);
    }
  }

  async updateCustomer(req: Request, res: Response) {
    try {
      const customer = await this.customerService.updateCustomer(
        req.params.id,
        req.body
      );
      res.status(200).json(responsePOST(customer));
    } catch (error: any) {
      this.handleError(error, res);
    }
  }

  async deleteCustomer(req: Request, res: Response) {
    try {
      await this.customerService.deleteCustomer(req.params.id);
      res.status(200).json(responsePOST(null));
    } catch (error: any) {
      this.handleError(error, res);
    }
  }
}
