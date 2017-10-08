import { User } from '../user/user.model';

export class PurchaseOrderModel {
  id: string;
  createdDate: Date;
  createdBy: User;
}

export class LineItem {
  description: string;
  quantity: number;
  unitPrice: number;
}
