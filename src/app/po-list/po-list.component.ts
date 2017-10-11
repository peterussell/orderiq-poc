import { Component, OnInit } from '@angular/core';

import { PurchaseOrderService } from '../purchase-order.service';
import { PurchaseOrder } from './purchase-order.model';

@Component({
  selector: 'app-po-list',
  templateUrl: './po-list.component.html',
  styleUrls: ['./po-list.component.css']
})
export class POListComponent implements OnInit {
  purchaseOrders: PurchaseOrder[];

  constructor(private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit() {
    this.purchaseOrders = this.purchaseOrderService.getPurchaseOrders();
    console.log(this.purchaseOrders);
  }
}
