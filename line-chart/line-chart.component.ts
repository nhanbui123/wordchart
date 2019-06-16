import { Component, OnInit } from '@angular/core';
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  data: any = [{
    "month": "February",
    "value": 23.5,
    "expenses": 21.1
  }, {
    "month": "March",
    "value": 26.2,
    "expenses": 30.5
  }, {
    "month": "April",
    "value": 30.1,
    "expenses": 34.9
  }, {
    "month": "April",
    "value": 20.5,
    "expenses": 23.1
  }, {
    "month": "May",
    "value": 30.6,
    "expenses": 28.2
  }, {
    "month": "Jun",
    "value": 34.1,
    "expenses": 31.9
  }, {
    "month": "July",
    "value": 100,
    "expenses": 31.9
  }, {
    "month": "August",
    "value": 34.1,
    "expenses": 31.9
  }, {
    "month": "September",
    "value": 34.1,
    "expenses": 31.9
  }, {
    "month": "October",
    "value": 34.1,
    "expenses": 31.9
  }, {
    "month": "November",
    "value": 34.1,
    "expenses": 31.9
  },
    {
      "month": "December",
      "value": 34.1,
      "expenses": 31.9
    }];

  ngOnInit() {
    this.createLineChart();
  }

  constructor(){

  }

  createLineChart(){

    am4core.createFromConfig({
      "yAxes": [{
        "type": "ValueAxis",
        "opposite": true
      }],
      "xAxes": [{
        "type": "",
        "dataFields":"month",
        "min":25,
        "max":100,
        "renderer":[{

        }],
        "opposite": true,
      }]
    },"wordCloud", am4charts.XYChart)
    //  am4core.create("lineChart", am4charts.XYChart);
    //
    // chart.data = this.data;
    //
    // let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    //
    //
    // categoryAxis.renderer.grid.template.location = 0;
    // categoryAxis.renderer.ticks.template.disabled = true;
    // categoryAxis.renderer.line.opacity = 0;
    // categoryAxis.renderer.grid.template.disabled = true;
    // categoryAxis.renderer.minGridDistance = 40;
    // categoryAxis.dataFields.category = "month";
    // categoryAxis.startLocation = 0.4;
    // categoryAxis.endLocation = 0.6;
    //
    //
    // let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.tooltip.disabled = true;
    // valueAxis.renderer.line.opacity = 0;
    // valueAxis.renderer.ticks.template.disabled = true;
    // valueAxis.min = 0;
    //
    // let lineSeries = chart.series.push(new am4charts.LineSeries());
    // lineSeries.dataFields.categoryX = "month";
    // lineSeries.dataFields.valueY = "value";
    // lineSeries.tooltipText = "value: {valueY.value}";
    // lineSeries.fillOpacity = 0.5;
    // lineSeries.strokeWidth = 3;
    // lineSeries.propertyFields.stroke = "lineColor";
    // lineSeries.propertyFields.fill = "lineColor";
    //
    // let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    // bullet.circle.radius = 6;
    // bullet.circle.fill = am4core.color("#fff");
    // bullet.circle.strokeWidth = 3;
    //
    // chart.cursor = new am4charts.XYCursor();
    // chart.cursor.behavior = "panX";
    // chart.cursor.lineX.opacity = 0;
    // chart.cursor.lineY.opacity = 0;
    //
    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarX.parent = chart.bottomAxesContainer;

  }
}
