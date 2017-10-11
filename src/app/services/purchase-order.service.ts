import { Injectable } from '@angular/core';

import { PurchaseOrder, LineItem } from '../models/purchase-order.model';
import { AuthService } from './auth.service';

@Injectable()
export class PurchaseOrderService {
  constructor(private authService: AuthService) {}

  // TODO: should load purchase orders from an external API or service
  purchaseOrders: PurchaseOrder[] = [
  ];

  getPurchaseOrders() {
    return this.purchaseOrders;
  }
}
