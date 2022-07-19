import { Component, OnInit } from '@angular/core';

import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';

import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
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

    let cities:any = {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "properties": {
          "name": "India",
          "id": "India"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [78.96288, 20.593684]
        }
      }, {
        "type": "Feature",
        "properties": {
          "name": "London",
          "id": "London"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-0.454296, 51.470020]
        }
      }, {
        "type": "Feature",
        "properties": {
          "name": "Beijing",
          "id": "Beijing"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [116.597504, 40.072498]
        }
      }]
    };

    //Create point series
    let pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        geoJSON: cities,
        exclude: ['AQ'],
      })
    );

    // pointSeries.data.setAll([{
    //   geometry: {
    //     type: "Point",
    //     coordinates: [78.96288, 20.593684]
    //   }
    // }, {
    //   geometry: {
    //     type: "Point",
    //     coordinates: [-0.454296, 51.470020]
    //   }
    // }, {
    //   geometry: {
    //     type: "Point",
    //     coordinates: [116.597504, 40.072498]
    //   }
    // }]);

    pointSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: am5.color(0xff0000),
        }),
      });
    });
  }
}
