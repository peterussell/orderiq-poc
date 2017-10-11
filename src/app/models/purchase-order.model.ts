import { Budget } from './budget.model';
import { Supplier } from './supplier.model';
import { User } from './user.model';

export class PurchaseOrder {
  id: number;
  createdDate: Date;
  invoiceDate: Date;
  approvedDate: Date;
  paidDate: Date;
  createdById: number;
  approvedById: number;
  suppliers: Supplier[] = [];
  budget: Budget;
  orderNumber: number;
  isOpenOrder: boolean;
  coding: number;
  lineItems: LineItem[] = [];

  static nextId: number = 1;
  static getNextId() {
    return PurchaseOrder.nextId++;
  }

  // constructor(
  //   id: number, createdDate: date, createdBy: User, suppliers: Supplier[],
  //   budget: Budget, isOpenOrder: boolean, coding: number, lineItems: LineItem[]) {
  //     // this.id =  // TODO: need to have an id getter/setter service
  //     this.createdDate = createdDate;
  //     this.createdBy = createdBy;
  //     this.suppliers = suppliers.slice();
  //     this.budget = budget;
  //     this.isOpenOrder = isOpenOrder;
  //     this.coding = coding;
  //     this.lineItems = lineItems.slice();
  //   }
  // )

  constructor(createdDate: Date, createdById: number, supplier: Supplier) {
    this.id = PurchaseOrder.getNextId();
    this.createdDate = createdDate;
    this.suppliers.push(supplier);
  }
}

export class LineItem {
  description: string;
  quantity: number;
  unitPrice: number;
}
