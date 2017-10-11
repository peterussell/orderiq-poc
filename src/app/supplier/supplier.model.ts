export class Supplier {
  id: number;
  name: string;
  address: string;
  phone: string;

  static nextId: number = 1;
  static getNextId(): number {
    return Supplier.nextId++;
  }

  constructor(name: string, address: string, phone: string) {
    this.id = Supplier.getNextId();
    this.name = name;
    this.address = address;
    this.phone = phone;
  }
}
