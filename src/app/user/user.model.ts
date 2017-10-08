import { Budget } from '../budget/budget.model';
import { UserPrivileges } from './user-privileges.enum';

export class User {
  id: number;
  username: string;
  password: string; // should be hashed
  fullName: string;
  isEnabled: boolean = true; // default
  budgets: Budget[];
  privileges: UserPrivileges[] = [];

  constructor(id: number, username: string, password: string, fullName: string,
    isEnabled?: boolean) {
    this.id = id;
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
