import { Component, OnInit } from '@angular/core';

import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-ndhs-map',
  templateUrl: './ndhs-map.component.html',
  styleUrls: ['./ndhs-map.component.css']
})
export class NdhsMapComponent implements OnInit {

  chartOption: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
