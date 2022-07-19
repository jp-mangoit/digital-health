import { Component, OnInit } from '@angular/core';

import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-ndhs-map',
  templateUrl: './ndhs-map.component.html',
  styleUrls: ['./ndhs-map.component.css'],
})
export class NdhsMapComponent implements OnInit {
  chartOption: EChartsOption = {
    toolbox: {
      show: true,
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [50, 75],
        center: ['50%', '50%'],
        data: [
          { value: 40, name: 'A' },
          { value: 28, name: 'B' },
        ]
      }
    ]
  };

  constructor() {}

  ngOnInit(): void {}
}
