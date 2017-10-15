import { Budget } from './budget.model';

export class User {
  id: number;
  budgets: Budget[];
  privileges: UserPrivilege[] = [];

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
    this.privileges.push(UserPrivilege.User); // default
  }

  addBudget(budget: Budget) {
    this.budgets.push(budget);
  }

  getName(): string {
    return this.fullName ? this.fullName : this.username;
  }

  isAdmin(): boolean {
    return this.privileges.indexOf(UserPrivilege.Admin) !== -1;
  }

  addUserPrivilege(privilege: UserPrivilege) {
    this.privileges.push(privilege);
  }
}

export enum UserPrivilege {
  ReadOnly,
  User,
  BudgetAdmin,
  Admin,
  SuperUser
}
