import { Budget } from '../models/budget.model';

export class BudgetService {
  budgets: Budget[] = [];

  constructor() {
    this.createFakeBudgets();
  }

  getBudgetById(id: number): Budget {
    return this.budgets.find(b => b.id === id);
  }

  getBudgets(): Budget[] {
    return this.budgets.slice();
  }

  // TEMP
  createFakeBudgets() {
    this.budgets.push(new Budget('English', 10, 4000.00));
    this.budgets.push(new Budget('Maths', 20, 3600.00));
    this.budgets.push(new Budget('Drama', 30, 7250.00));
    this.budgets.push(new Budget('Science', 40, 10201.50));
  }
}
