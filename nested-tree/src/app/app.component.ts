import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NestedTableComponent } from './nested-table/nested-table.component';
import { EnquiryNestedTreeComponent } from './enquiry-nested-tree/enquiry-nested-tree.component';

@Component({
  selector: 'app-root',
  imports: [NestedTableComponent, EnquiryNestedTreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nested-tree';
}
