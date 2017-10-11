import { Injectable } from '@angular/core';

import { PurchaseOrder, LineItem } from '../models/purchase-order.model';
import { AuthService } from './auth.service';
import { SupplierService } from './supplier.service';
import { UserService } from './user.service';

@Injectable()
export class PurchaseOrderService {
  purchaseOrders: PurchaseOrder[] = [];

  constructor(private authService: AuthService,
              private supplierService: SupplierService,
              private userService: UserService) {
    this.loadFakePurchaseOrders()
  }

  getPurchaseOrders(): PurchaseOrder[] {
    return this.purchaseOrders;
  }

  // TEMP: should call an external API or service
  loadFakePurchaseOrders() {
    // TEMP: users for testing. Use currentUser from authService IRL.
    const pRusId: number = this.userService.getUserByUserName('pr').id;
    const sFoxId: number = this.userService.getUserByUserName('sf').id;
    const mHalId: number = this.userService.getUserByUserName('mh').id;
    const dVadId: number = this.userService.getUserByUserName('dv').id;

    this.purchaseOrders.push(new PurchaseOrder(
      new Date(), pRusId, this.supplierService.getSupplier(1)
    ));
    this.purchaseOrders.push(new PurchaseOrder(
      new Date(), pRusId, this.supplierService.getSupplier(2)
    ));
    this.purchaseOrders.push(new PurchaseOrder(
      new Date(), pRusId, this.supplierService.getSupplier(3)
    ));
  }
}
