import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {
  TableModule,
  TableRowExpandEvent,
  TableRowCollapseEvent,
} from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Product } from '../Domain/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-nested-table',
  imports: [
    ButtonModule,
    TableModule,
    CommonModule,
    ToastModule,
    RatingModule,
    TagModule,
    FormsModule,
  ],
  templateUrl: './nested-table.component.html',
  styleUrl: './nested-table.component.scss',
  providers: [ProductService, MessageService],
})
export class NestedTableComponent {
  products!: Product[];
  selectedProduct!: Product;

  expandedRows = {};

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.productService
      .getProductsWithOrdersSmall()
      .then((data) => (this.products = data));
  }

  expandAll() {
    // this.expandedRows = this.products.reduce(
    //   (acc, p) => (acc[p.id] = true) && acc,
    //   {}
    // );
    this.expandedRows = this.products.reduce(
      (acc: { [key: string]: boolean }, p) => {
        acc[p.id!] = true; // p.id is a valid key here
        return acc;
      },
      {}
    );
  }

  collapseAll() {
    this.expandedRows = {};
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return '';
  }

  getStatusSeverity(status: string) {
    switch (status) {
      case 'PENDING':
        return 'warn';
      case 'DELIVERED':
        return 'success';
      case 'CANCELLED':
        return 'danger';
    }
    return '';
  }

  onRowExpand(event: TableRowExpandEvent) {
    console.log('value during the expansion', this.expandedRows);
    this.messageService.add({
      severity: 'info',
      summary: `Product Expanded`,
      detail: event.data.name,
      life: 3000,
    });
  }

  onRowCollapse(event: TableRowCollapseEvent) {
    console.log('event value passed during the collapse', event);
    this.messageService.add({
      severity: 'success',
      summary: 'Product Collapsed',
      detail: event.data.name,
      life: 3000,
    });
  }
}
