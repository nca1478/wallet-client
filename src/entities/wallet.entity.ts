import { Customer } from "./customer.entity";

export interface Wallet {
  id: string;
  sessionId?: string;
  tokenConfirm?: string;
  available: number;
  customer: Customer;
}
