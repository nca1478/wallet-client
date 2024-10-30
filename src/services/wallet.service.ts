import * as soap from "soap";
import { envs } from "../config";
import { soapRoutes } from "../routes/index";

export class WalletService {
  private soapUrl = `${envs.SOAP_BASE_URL}${soapRoutes.wallet}`;
  private client: any;

  constructor() {
    soap.createClient(this.soapUrl, (err, client) => {
      if (err)
        throw new Error("No se puede conectar con el servidor!!!! \n" + err);
      this.client = client;
    });
  }

  async rechargeWallet(args: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.client.rechargeWallet(args, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  async getAvailableWallet(args: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.client.getAvailableWallet(args, (err: any, result: any) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}
