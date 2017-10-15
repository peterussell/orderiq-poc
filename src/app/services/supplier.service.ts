import { Supplier } from '../models/supplier.model';

export class SupplierService {
  suppliers: Supplier[] = [
    new Supplier(
      'Bob\'s Books',
      '105 Normandale Road, Normandale, Lower Hutt 5010',
      '(04) 589-5672',
      'bob@bobsbooks.com',
      'Johnathan'
    ),
    new Supplier(
      'Pete\'s Papers',
      '12 Pekanga Road, Normandale, Lower Hutt 5010',
      '(04) 589-2261',
      'pete@petespapers.com',
      'Raeline'
    ),
    new Supplier(
      'Learners R Us',
      '99 Woodward Way, Onehunga, Auckland 5203',
      '(09) 592-6928',
      'info@learners.com',
      'Stephan Inling'
    ),
    new Supplier(
      'Outdoor Adventures NZ.',
      '255 Rose Lane, Spreydon, Christchurch 5990',
      '(03) 569-9232',
      'contact@outdooradventuresnz.co.nz',
      'Sandy Allsop'
    )
  ];

  getSuppliers(): Supplier[] {
    return this.suppliers.slice();
  }

  getSupplierById(id: number): Supplier {
    return this.suppliers.find(s => s.id === id);
  }
}
