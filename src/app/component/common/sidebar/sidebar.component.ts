import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

const TREE_DATA: any = [
  {
    name: 'NDHS map',
    children: [
      {
        name: 'Countries',
        children: [
          {
            name: 'View Data',
            children: [
              { name: 'Present Development' },
              { name: 'Prospective Development' },
            ],
          },
        ],
      },
      {
        name: 'Comparative Results',
        children: [
        ],
      },
    ],
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  dataSource = new MatTreeNestedDataSource();
  treeControl = new NestedTreeControl((node: any) => node.children);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: any) =>
    !!node.children && node.children.length > 0;

  ngOnInit(): void {}
}