import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrl: './product-header.component.css'
})
export class ProductHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort= 'desc'
  itemsShowCount = 12;

  onSortUpdate(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdate(newItemsCount: number): void {
    this.itemsShowCount = newItemsCount;
  }

  onColumnsUpdate(newColumnsCount: number): void {
    this.columnsCountChange.emit(newColumnsCount);
  }
}
