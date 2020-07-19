/*
 * @Description:
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-19 16:20:55
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-19 16:33:44
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planTime',
  templateUrl: './planTime.component.html',
  styleUrls: ['./planTime.component.scss'],
})
export class PlanTimeComponent implements OnInit {
  listDataMap = {
    eight: [
      { type: 'warning', content: '下午3点飞机回国。' },
      { type: 'success', content: '晚上入住的酒店还未确定。' },
    ],
    ten: [
      { type: 'warning', content: '早上跑步30分钟' },
      { type: 'success', content: '解决眼前遇到的技术问题' },
      { type: 'error', content: '工作总结' },
    ],
    eleven: [
      { type: 'warning', content: '申请个人工牌，电脑等用品。' },
      { type: 'success', content: '准备个人材料' },
      { type: 'error', content: '自我介绍' },
      { type: 'error', content: '项目梳理' },
      { type: 'error', content: '学习手绘' },
      { type: 'error', content: '跑步' },
    ],
  };

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

  constructor() {}

  ngOnInit() {}
}
