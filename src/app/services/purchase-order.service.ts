import { Injectable } from '@angular/core';

import { PurchaseOrder, LineItem } from '../models/purchase-order.model';
import { AuthService } from './auth.service';
import { BudgetService } from './budget.service';
import { SupplierService } from './supplier.service';
import { UserService } from './user.service';

@Injectable()
export class PurchaseOrderService {
  purchaseOrders: PurchaseOrder[] = [];

  constructor(private authService: AuthService,
              private budgetService: BudgetService,
              private supplierService: SupplierService,
              private userService: UserService) {
    this.createFakePurchaseOrders()
  }

  getPurchaseOrders(): PurchaseOrder[] {
    return this.purchaseOrders;
  }

  // TEMP: should call an external API or service
  createFakePurchaseOrders() {
    // TEMP: users for testing. Use currentUser from authService IRL.
    const pRusId: number = this.userService.getUserByUserName('pr').id;
    const sFoxId: number = this.userService.getUserByUserName('sf').id;
    const mHalId: number = this.userService.getUserByUserName('mh').id;
    const dVadId: number = this.userService.getUserByUserName('dv').id;

    this.purchaseOrders.push(new PurchaseOrder(
      new Date(),
      pRusId,
      this.supplierService.getSupplierById(1),
      this.budgetService.getBudgetById(3),
      false,
      [
        new LineItem('Pencil', 10, 3.99),
        new LineItem('Book', 15, 2.50)
      ]
    ));
    this.purchaseOrders.push(new PurchaseOrder(
      new Date(),
      pRusId,
      this.supplierService.getSupplierById(2),
      this.budgetService.getBudgetById(4),
      true,
      [] // TODO: Open orders shouldn't have line items (check this)
    ));
    this.purchaseOrders.push(new PurchaseOrder(
      new Date(),
      pRusId,
      this.supplierService.getSupplierById(3),
      this.budgetService.getBudgetById(1),
      false,
      [
        new LineItem('Field Trip', 1, 362.07),
        new LineItem('Basketball', 7, 64.20),
        new LineItem('USB Stick', 30, 19.95),
        new LineItem('Stationery (misc)', 1, 16.22)
      ]
    ));
    this.purchaseOrders.push(new PurchaseOrder(
      new Date(),
      mHalId,
      this.supplierService.getSupplierById(2),
      this.budgetService.getBudgetById(2),
      false,
      [
        new LineItem('Textbook', 10, 120.00),
        new LineItem('Video - Night at the Museum', 1, 24.00),
        new LineItem('Paper wall chart', 3, 10.00)
      ]
    ));
  }
}
