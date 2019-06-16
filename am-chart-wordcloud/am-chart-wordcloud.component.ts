import {Component, OnInit, AfterViewInit, OnDestroy, OnChanges, SimpleChanges, Input} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";

import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";

@Component({
  selector: 'chart-wordcloud',
  templateUrl: './am-chart-wordcloud.component.html',
  styleUrls: ['./am-chart-wordcloud.component.css']
})
export class AmChartWordcloudComponent implements OnInit, AfterViewInit, OnDestroy{

  listWord: any = [{
    "tag": "Breaking News",
    "weight": 60
  }, {
    "tag": "Environment",
    "weight": 80
  }, {
    "tag": "Politics",
    "weight": 90
  }, {
    "tag": "Business",
    "weight": 25
  }, {
    "tag": "Lifestyle",
    "weight": 30
  }, {
    "tag": "World",
    "weight": 45
  }, {
    "tag": "Sports",
    "weight": 160
  }, {
    "tag": "Fashion",
    "weight": 20
  }, {
    "tag": "usdfdsfsdf",
    "weight": 100
  }, {
    "tag": "aka",
    "weight": 40
  }
    , {
      "tag": "maaaa",
      "weight": 98
    }
    , {
      "tag": "leeeeee",
      "weight": 76
    }];

  constructor() { }
  ngOnInit() {
  }
  createWordCloud(){
    am4core.createFromConfig({
      "series": [{
        "type": "WordCloudSeries",
        "data": this.listWord,
        "dataFields": {
          "word": "tag",
          "value": "weight"
        },
        "minFontSize":15,
        "heatRules": [{
          "target": "labels.template",
          "property": "fill",
          "min": am4core.color("#0000CC"),
          "max": am4core.color("#CC00CC"),
          "dataField": "value"
        }]
      }]

    }, "wordCloud", am4plugins_wordCloud.WordCloud);
  }

  ngAfterViewInit(): void {
    this.createWordCloud();
  }

  ngOnDestroy(): void {

  }

}
