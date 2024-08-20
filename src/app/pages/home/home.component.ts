import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cols = 3;
  category: string | undefined;

  columnsCountChange(colsNumber: number): void {
    this.cols = colsNumber;
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
