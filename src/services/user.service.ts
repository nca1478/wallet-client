import * as soap from "soap";
import { User } from "../entities/user.entity";

const SOAP_URL = "http://localhost:3000/wsdl?wsdl";

export class UserService {
  private client: any;

  constructor() {
    soap.createClient(SOAP_URL, (err, client) => {
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

  async getUser(id: number): Promise<User> {
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

  async updateUser(id: number, user: Partial<User>): Promise<User> {
    return new Promise((resolve, reject) => {
      this.client.updateUser({ id, ...user }, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  async deleteUser(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.deleteUser({ id }, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}
