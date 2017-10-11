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

  addAdditionalSupplier(supplier: Supplier): void {
    this.suppliers.push(supplier);
  }

  getSupplierNames(): string {
    return this.suppliers.map(s => { return s.name; }).join(', ');
  }

  getTotalValue(): number {
    let total: number = 0;
    this.lineItems.map(li => {
      total += li.quantity * li.unitPrice;
    });
    return total;
  }

  getOrderStatus(): string {
    switch (this.orderStatus) {
      case OrderStatus.EnterDetails:
        return "Enter Details";
      case OrderStatus.WaitingForOrderNumber:
        return "Waiting for Order Number";
      case OrderStatus.OrderGoods:
        return "Order Goods";
      case OrderStatus.InvoiceReceived:
        return "Invoice Received";
      case OrderStatus.WaitingForPaymentApproval:
        return "Waiting for Payment Approval";
      case OrderStatus.InvoicePaid:
        return "Invoice Paid";
      default:
        return "Unknown";
    }
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
