import { Component, OnInit } from '@angular/core';

import { Budget } from '../../models/budget.model';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  budgets: Budget[];

  constructor(private budgetService: BudgetService) { }

  ngOnInit() {
    this.budgets = this.budgetService.getBudgets();
  }

}
