import { Customer } from "./customer.entity";

export interface Order {
  id: string;
  tokenConfirm: string;
  amount: number;
  customer: Customer;
}
