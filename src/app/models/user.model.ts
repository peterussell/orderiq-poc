import { Budget } from './budget.model';

export class User {
  id: number;
  budgets: Budget[];
  privileges: UserPrivileges[] = [];

  static nextId: number = 1;
  static getNextId(): number {
    return User.nextId++;
  }

  constructor(
    public username: string,
    public password: string,
    public fullName?: string,
    public isEnabled?: boolean
  ) {
    this.id = User.getNextId();
    this.privileges.push(UserPrivileges.User); // default
  }

  addBudget(budget: Budget) {
    this.budgets.push(budget);
  }

  getName(): string {
    return this.fullName ? this.fullName : this.username;
  }
}

export enum UserPrivileges {
  ReadOnly,
  User,
  BudgetAdmin,
  Admin,
  SuperUser
}
