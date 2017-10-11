import { Component, OnInit, Input } from '@angular/core';

import { PurchaseOrder } from '../../../models/purchase-order.model';

@Component({
  selector: 'app-po-item',
  templateUrl: './po-item.component.html',
  styleUrls: ['./po-item.component.css']
})
export class POItemComponent implements OnInit {
  @Input() purchaseOrder: PurchaseOrder;

  constructor() { }

  ngOnInit() {
  }
}
