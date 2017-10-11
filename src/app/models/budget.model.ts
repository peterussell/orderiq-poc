export class Budget {
  id: number;
  name: string;
  code: number;
  limit: number; // TODO: may be a better currency type for this

  static nextId: number = 1;
  static getNextId(): number {
    return Budget.nextId++;
  }

  constructor(name: string, code: number, limit: number) {
    this.id = Budget.getNextId();
    this.name = name;
    this.code = code;
    this.limit = limit;
  }
}
