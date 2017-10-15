import { Component, OnInit } from '@angular/core';

import { Supplier } from '../../models/supplier.model';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  suppliers: Supplier[];

  constructor(private supplierService: SupplierService) { }

  ngOnInit() {
    this.suppliers = this.supplierService.getSuppliers();
  }
}
