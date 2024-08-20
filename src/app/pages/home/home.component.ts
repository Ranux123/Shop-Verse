import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
cols = 3;

onColumnsCountChange(colsNumber: number): void {
  this.cols = colsNumber;
}
}
