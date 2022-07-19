import { Component, OnInit } from '@angular/core';

import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';

import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-nhdc-map',
  templateUrl: './nhdc-map.component.html',
  styleUrls: ['./nhdc-map.component.css'],
})
export class NhdcMapComponent implements OnInit {
  constructor() {}
  
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  ngOnInit(): void {

    // Create root and chart
    let root = am5.Root.new('chartdiv');
    let chart = root.container.children.push(
      am5map.MapChart.new(root, { projection: am5map.geoMercator() })
    );

    // Create polygon series
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"]
      })
    );

    // Create point series
    // let pointSeries = chart.series.push(
    //   am5map.MapPointSeries.new(root, {
    //     geoJSON: am5geodata_worldLow,
    //     exclude: ['AQ'],
    //   })
    // );

    // pointSeries.bullets.push(function () {
    //   return am5.Bullet.new(root, {
    //     sprite: am5.Circle.new(root, {
    //       radius: 5,
    //       fill: am5.color(0xff0000),
    //     }),
    //   });
    // });
  }
}
