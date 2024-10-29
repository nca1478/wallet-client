import * as soap from "soap";
import { Customer } from "../entities/customer.entity";
import { envs } from "../config";
import { soapRoutes } from "../routes/index";

export class CustomerService {
  private soapUrl = `${envs.SOAP_BASE_URL}${soapRoutes.customer}`;
  private client: any;

  constructor() {
    soap.createClient(this.soapUrl, (err, client) => {
      if (err) throw err;
      this.client = client;
    });
  }

  async createCustomer(customer: Partial<Customer>): Promise<Customer> {
    return new Promise((resolve, reject) => {
      this.client.createCustomer(customer, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  async getCustomer(id: string): Promise<Customer> {
    return new Promise((resolve, reject) => {
      this.client.getCustomer({ id }, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  async getAllCustomers(): Promise<Customer[]> {
    return new Promise((resolve, reject) => {
      this.client.getAllCustomers({}, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  async updateCustomer(
    id: string,
    customer: Partial<Customer>
  ): Promise<Customer> {
    return new Promise((resolve, reject) => {
      this.client.updateCustomer(
        { id, ...customer },
        (err: any, result: any) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }

  async deleteCustomer(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.deleteCustomer({ id }, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}
