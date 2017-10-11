import { Budget } from './budget.model';

export class User {
  id: number;
  username: string;
  password: string; // should be hashed
  fullName: string;
  isEnabled: boolean = true;
  budgets: Budget[];
  privileges: UserPrivileges[] = [];

  static nextId: number = 1;
  static getNextId(): number {
    return User.nextId++;
  }

  constructor(username: string, password: string, fullName: string,
    isEnabled?: boolean) {
    this.id = User.getNextId();
    this.username = username;
    this.password = password;
    this.fullName = fullName;
    this.isEnabled = isEnabled;
    this.privileges.push(UserPrivileges.User); // default
  }

  addBudget(budget: Budget) {
    this.budgets.push(budget);
  }
}

export enum UserPrivileges {
  ReadOnly,
  User,
  BudgetAdmin,
  Admin,
  SuperUser
}
