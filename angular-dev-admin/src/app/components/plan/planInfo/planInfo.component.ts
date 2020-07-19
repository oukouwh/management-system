/*
 * @Description:
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-19 10:40:40
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-19 16:58:40
 */

import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-planInfo',
  templateUrl: './planInfo.component.html',
  styleUrls: ['./planInfo.component.scss'],
})
export class PlanInfoComponent implements OnInit {
    dataList = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.',
    ];

    data = [
      {
        name: 'Lily',
      },
      {
        name: 'Lily',
      },
    ];

    visible = false;

    open(): void {
      this.visible = true;
    }

    close(): void {
      this.visible = false;
    }

    constructor(public msg: NzMessageService) {}

    ngOnInit() {}
}
