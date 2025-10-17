import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  DetailRowService,
  SortService,
  GridModule,
  PageService,
  FilterService,
} from '@syncfusion/ej2-angular-grids';
import { ITEM_DATA } from '../Services/islf-tree-service';
import { JsonPipe } from '@angular/common';
import { data } from '@syncfusion/ej2';
import { sum } from '@syncfusion/ej2/charts';

@Component({
  selector: 'app-islf-hierarchytree',
  providers: [PageService, SortService, FilterService, DetailRowService],
  imports: [GridModule, JsonPipe],
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

  ngOnInit(): void {
    this.lineItems = ITEM_DATA;
    this.filterSettings = { type: 'Excel' };
    this.sourcingSummary = {
      queryString: 'sNo',
      columns: [
        { field: 'summaryType', headerText: 'Summary Type', textAlign: 'Right', width: 100 },
        { field: 'sourceNo', headerText: 'Source No', width: 100 },
        { field: 'vendorName', headerText: 'Vendor Name', width: 100 },
        { field: 'buyPrice', headerText: 'Buy Price', width: 100 },
      ],
      dataSource: [
        {
          sNo: 1,
          summaryType: 'Sourcing Summary',
          sourceNo: '3',
          vendorName: 'Vendor A',
          buyPrice: '$1000',
        },
        {
          sNo: 2,
          summaryType: 'Tariff Summary',
          sourceNo: '4',
          vendorName: 'Vendor B',
          buyPrice: '$1500',
        },
      ],
      childGrid: {
        queryString: 'Summary Type',
        columns: [
          { field: 'vendorName', headerText: 'Vendor Name', textAlign: 'Right', width: 100 },
          { field: 'sourcedTime', headerText: 'Sourced Time', width: 100 },
          { field: 'currency', headerText: 'Currency', width: 100 },
          { field: 'buyPrice', headerText: 'Buy Price', width: 100 },
          { field: 'sellPrice', headerText: 'Sell Price', width: 100 },
          { field: 'remarks', headerText: 'Remarks', width: 100 },
        ],
        dataSource: [
          {
            summaryType: 'Sourcing Summary',
            vendorName: 'Vendor A',
            sourcedTime: '2023-10-01',
            currency: 'USD',
            buyPrice: '$1000',
            sellPrice: '$1200',
            remarks: 'On Time',
          },
          {
            summaryType: 'Tariff Summary',
            vendorName: 'Vendor B',
            sourcedTime: '2023-10-02',
            currency: 'USD',
            buyPrice: '$1500',
            sellPrice: '$1800',
            remarks: 'Delayed',
          },
          {
            summaryType: 'Tariff Summary',
            vendorName: 'Vendor C',
            sourcedTime: '2023-10-03',
            currency: 'INR',
            buyPrice: '$2000',
            sellPrice: '$2300',
            remarks: 'On Time',
          },
          {
            summaryType: 'Sourcing Summary',
            vendorName: 'Vendor D',
            sourcedTime: '2023-10-04',
            currency: 'INR',
            buyPrice: '$2500',
            sellPrice: '$2800',
            remarks: 'Delayed',
          },
        ],
      },
    };
  }
}
