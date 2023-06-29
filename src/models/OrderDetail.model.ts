import { OrderItem } from "./OrderItem.model";

export class OrderDetail {
  orderNumber: number | undefined;
  orderNumberDisplay: string | undefined;
  name: string | undefined;
  contactNumber: number | undefined;
  address: string | undefined;
  subTotal: number | undefined;
  discount: number | undefined;
  tax: number | undefined;
  deliveryCharge: number | undefined;
  createdDate: string | undefined;
  items: OrderItem[] | undefined;
}
