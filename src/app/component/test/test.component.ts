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

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart: any = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: 'none',
        panY: 'none',
        wheelX: 'none',
        wheelY: 'none',
        projection: am5map.geoMercator(),
      })
    );

    // Create polygon series
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ['AQ'],
      })
    );

    // let tooltip:any = am5.Tooltip.new(root, {
    //   getFillFromSprite: false,
    //   labelText: "[bold]{name}"
    // });

    // tooltip.get("background").setAll({
    //   fill: am5.color(0x00ffff),
    //   fillOpacity: 0.8
    // });

    //polygonSeries.set("tooltip", tooltip);

    polygonSeries.set("fill", am5.color(0xffffff));
    polygonSeries.set("stroke", am5.color(0x000000));

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
      toggleKey: "active",

      templateField: 'polygonSettings',
      interactive: true,
    });

    polygonSeries.mapPolygons.template.states.create('hover', {
      fill: am5.color(0x677935),
    });
    
    polygonSeries.mapPolygons.template.states.create("active", {
      fill: root.interfaceColors.get("primaryButtonActive")
    });

    let cities: any = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            name: 'India',
          },
          geometry: {
            type: 'Point',
            coordinates: [78.96288, 20.593684],
          },
        },
        {
          type: 'Feature',
          properties: {
            name: 'London',
          },
          geometry: {
            type: 'Point',
            coordinates: [-0.454296, 51.47002],
          },
        },
        {
          type: 'Feature',
          properties: {
            name: 'Beijing',
          },
          geometry: {
            type: 'Point',
            coordinates: [116.597504, 40.072498],
          },
        },
      ],
    };

    //Create point series
    let pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        geoJSON: cities,
        exclude: ['AQ'],
      })
    );

    pointSeries.bullets.push(function () {
      let circle = am5.Circle.new(root, {
        radius: 3,
        fill: am5.color(0xff0000),
        tooltipText: "{name}"
      });
    
      circle.events.on("click", function(ev) {
        console.log(ev.target.dataItem);
      });
    
      return am5.Bullet.new(root, {
        sprite: circle
      });
    });
  }
}
