import { Supplier } from '../models/supplier.model';

export class SupplierService {
  suppliers: Supplier[] = [
    new Supplier(
      'Bob\'s Books',
      '105 Normandale Road, Normandale, Lower Hutt 5010',
      '(04) 589-5672'
    ),
    new Supplier(
      'Pete\'s Papers',
      '12 Pekanga Road, Normandale, Lower Hutt 5010',
      '(04) 589-2261'
    ),
    new Supplier(
      'Learners R Us',
      '99 Woodward Way, Onehunga, Auckland 5203',
      '(09) 592-6928'
    ),
    new Supplier(
      'Outdoor Adventures NZ.',
      '255 Rose Lane, Spreydon, Christchurch 5990',
      '(03) 569-9232'
    )
  ];

  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier {
    return this.suppliers.find(s => s.id === id);
  }
}
