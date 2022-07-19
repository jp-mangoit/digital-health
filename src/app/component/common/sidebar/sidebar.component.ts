import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import * as $ from 'jquery';
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
  {
    name: 'Digital R&D Map',
    
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

  
  public ngOnInit() {
    $(document).ready(function () {
         $('.toggleMenubar').on('click', function () {
           $('body').toggleClass('site-menubar-unfold').toggleClass('site-menubar-fold');
         });
       });
      $('.site-menu-item ul').on('click', function(e) {
        $('.site-menu-item ul li ul.co-sub-menu').toggleClass("level-3"); //you can list several class names 
        e.preventDefault();
      });
}
dropDown3() {
  $('.toggleSubmenu3').next('ul').toggleClass('show');
}
dropDown2() {
  $('.toggleSubmenu2').next('ul').toggleClass('show');
}
dropDown1() {
  $('.toggleSubmenu1').next('ul').toggleClass('show');
}
isValue: number = 0;

toggle(num:number) { this.isValue = num; }
}