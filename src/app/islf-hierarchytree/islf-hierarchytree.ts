import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  DetailRowService,
  SortService,
  GridModule,
  PageService,
  FilterService,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-islf-hierarchytree',
  providers: [PageService, SortService, FilterService, DetailRowService],
  imports: [GridModule],
  standalone: true,
  templateUrl: './islf-hierarchytree.html',
  styleUrl: './islf-hierarchytree.scss',
})
export class IslfHierarchytree {
  public lineItems: Object[] = [];
  public sourcingSummary: any;
  public sourceList: any;
  public TariffList: any;
  public filterSettings!: Object;

  ngOnInit(): void {}
}
