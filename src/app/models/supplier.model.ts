export class Supplier {
  id: number;

  static nextId: number = 1;
  static getNextId(): number {
    return Supplier.nextId++;
  }

  constructor(
    public name: string,
    public address: string,
    public phone: string,
    public email: string,
    public contactPerson: string) {
      this.id = Supplier.getNextId();
  }
}
