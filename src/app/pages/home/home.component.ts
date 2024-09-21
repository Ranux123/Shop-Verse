import { Component } from '@angular/core';

const ROWS_HEIHGT: {[id:number]: number} = { 1 : 400, 3 : 335, 4 : 350 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cols = 3;
  rowHeight =  ROWS_HEIHGT[this.cols];
  category: string | undefined;
  

  columnsCountChange(colsNumber: number): void {
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIHGT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
