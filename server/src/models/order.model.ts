import { Item } from "./item.model";

export class Order {
  orderNumber: string | undefined;
  name: string | undefined;
  contactNumber: number | undefined;
  address: string | undefined;
  subTotal: number | undefined;
  discount: number | undefined;
  tax: number | undefined;
  deliveryCharge: string | undefined;
}
