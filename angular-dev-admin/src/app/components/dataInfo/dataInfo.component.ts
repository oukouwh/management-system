/*
 * @Description:
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-20 16:49:37
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-20 16:49:51
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataInfo',
  templateUrl: './dataInfo.component.html',
  styleUrls: ['./dataInfo.component.scss'],
})
export class DataInfoComponent implements OnInit {

    option = {
        angleAxis: {
        },
        radiusAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四','周五'],
            z: 10
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4, 5],
            coordinateSystem: 'polar',
            name: 'PL',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 4, 6, 8, 10],
            coordinateSystem: 'polar',
            name: 'PG',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3, 4, 5],
            coordinateSystem: 'polar',
            name: 'SE',
            stack: 'a'
        }],
        legend: {
            show: true,
            data: ['PL', 'PG', 'SE']
        }
    };

    options = {
        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
            }
        }]
    };

    option_person = {
        title: {
            text: '感染人群',
            subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['新增人数', '治愈人数']
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}人'
            }
        },
        series: [
            {
                name: '新增人数',
                type: 'line',
                data: [123, 141, 155, 173, 246, 376, 321],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '治愈人数',
                type: 'line',
                data: [10, 12, 28, 57, 43, 29, 40],
                markPoint: {
                    data: [
                        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'},
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {
                            symbol: 'circle',
                            label: {
                                position: 'start',
                                formatter: '最大值'
                            },
                            type: 'max',
                            name: '最高点'
                        }]
                    ]
                }
            }
        ]
    };


  constructor() {}

  ngOnInit() {}
}
