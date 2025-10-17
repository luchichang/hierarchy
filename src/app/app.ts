import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { CusTreeTableComponent } from './cus-treetable/cus-treetable';
// import { TreeTableLikeComponent } from './cus-treehierarchy/cus-treehierarchy';
// import { HierarchyComponent } from './datagrid/datagrid';
import { IslfHierarchytree } from './islf-hierarchytree/islf-hierarchytree';
import { HierarchyComponent } from './datagrid/datagrid';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IslfHierarchytree, HierarchyComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('custom-treetable');
}
