import * as soap from "soap";
import { User } from "../entities";

export class UserService {
  private soapUrl = "http://localhost:3000/wsdl/user?wsdl";
  private client: any;

  constructor() {
    soap.createClient(this.soapUrl, (err, client) => {
      if (err) throw err;
      this.client = client;
    });
  }

  async createUser(user: Partial<User>): Promise<User> {
    return new Promise((resolve, reject) => {
      this.client.createUser(user, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  async getUser(id: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.client.getUser({ id }, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  async getAllUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.client.getAllUsers({}, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  async updateUser(id: string, user: Partial<User>): Promise<User> {
    return new Promise((resolve, reject) => {
      this.client.updateUser({ id, ...user }, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  async deleteUser(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.deleteUser({ id }, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}
