/*
 * @Description:
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-19 16:39:01
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-19 17:25:23
 */

import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-planSummary',
  templateUrl: './planSummary.component.html',
  styleUrls: ['./planSummary.component.scss'],
})
export class PlanSummaryComponent implements OnInit {
  // 绘制图表
  chartOption = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false,
    },
    dataset: {
      source: [
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['Vue', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
        ['Angular', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
        ['React', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
        ['Java', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1],
      ],
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
      { type: 'line', smooth: true, seriesLayoutBy: 'row' },
      { type: 'line', smooth: true, seriesLayoutBy: 'row' },
      { type: 'line', smooth: true, seriesLayoutBy: 'row' },
      { type: 'line', smooth: true, seriesLayoutBy: 'row' },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        label: {
          formatter: '{b}: {@2012} ({d}%)',
        },
        encode: {
          itemName: 'product',
          value: '2012',
          tooltip: '2012',
        },
      },
    ],
  };

  option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['VUE', 'Angular', 'React', 'Java']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '学习人群',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} K'
            }
        },
        {
            type: 'value',
            name: '技术难度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: 'VUE',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 30.4, 33]
        },
        {
            name: 'Angular',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 17.6, 18.2, 8.7, 18.8, 6.0, 2.3]
        },
        {
            name: 'React',
            type: 'bar',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 19.2]
        },
        {
            name: 'Java',
            type: 'bar',
            yAxisIndex: 1,
            data: [4.0, 6.2, 8.3, 10.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 121.0, 145.2]
        }
    ]
};

  constructor() {}

  ngOnInit() {}
}
