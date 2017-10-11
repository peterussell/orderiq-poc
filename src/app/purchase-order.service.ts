import { Injectable } from '@angular/core';

import { PurchaseOrder, LineItem } from './po-list/purchase-order.model';
import { AuthService } from './auth.service';

@Injectable()
export class PurchaseOrderService {
  constructor(private authService: AuthService) {}

  purchaseOrders: PurchaseOrder[] = [];

  getPurchaseOrders() {
    return this.purchaseOrders;
  }
}
