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
  orderStatus: OrderStatus;

  static nextId: number = 1;
  static getNextId() {
    return PurchaseOrder.nextId++;
  }

  constructor(
    createdDate: Date, createdById: number, supplier: Supplier,
    budget: Budget, isOpenOrder: boolean, lineItems: LineItem[]) {
    this.id = PurchaseOrder.getNextId();
    this.createdDate = createdDate;
    this.createdById = createdById;
    this.suppliers.push(supplier);
    this.budget = budget;
    this.isOpenOrder = isOpenOrder;
    this.lineItems = lineItems.slice();
    this.orderStatus = OrderStatus.EnterDetails;
  }
}

export class LineItem {
  description: string;
  quantity: number;
  unitPrice: number;

  constructor(description: string, quantity: number, unitPrice: number) {
    this.description = description;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
  }
}

enum OrderStatus {
  EnterDetails,
  WaitingForOrderNumber,
  OrderGoods,
  InvoiceReceived,
  WaitingForPaymentApproval,
  InvoicePaid
}
