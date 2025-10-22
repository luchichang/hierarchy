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
import { EnquiryNestedTreeService } from '../Services/enquiry-nested-tree.service';
import { EnquiryLineItem } from '../Domain/enquiry';

@Component({
  selector: 'app-enquiry-nested-tree',
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TagModule,
    ToastModule,
    RatingModule,
    FormsModule,
  ],
  templateUrl: './enquiry-nested-tree.component.html',
  providers: [EnquiryNestedTreeService, MessageService],
  styleUrl: './enquiry-nested-tree.component.scss',
})
export class EnquiryNestedTreeComponent {
  enqLineItems: EnquiryLineItem[]=[];

  selectedEnquiry?: EnquiryLineItem;

  constructor(
    private enquiryService: EnquiryNestedTreeService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.enquiryService
      .getEnquiryLineItems()
      .then((data) => (this.enqLineItems = data));
    console.log('enquiry line item data:', this.enqLineItems);
  }

  onRowExpand(event: TableRowExpandEvent) {
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
