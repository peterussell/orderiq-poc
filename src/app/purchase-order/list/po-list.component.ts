import { Component, OnInit } from '@angular/core';

import { PurchaseOrderService } from '../../services/purchase-order.service';
import { AuthService } from '../../services/auth.service';

import { PurchaseOrder } from '../../models/purchase-order.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-po-list',
  templateUrl: './po-list.component.html',
  styleUrls: ['./po-list.component.css']
})
export class POListComponent implements OnInit {
  myPurchaseOrders: PurchaseOrder[];

  constructor(private purchaseOrderService: PurchaseOrderService,
              private authService: AuthService) { }

  ngOnInit() {
    this.myPurchaseOrders = this.purchaseOrderService.getPurchaseOrders(
      this.authService.getCurrentUser().id
    );
  }
}
