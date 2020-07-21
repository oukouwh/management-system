/*
 * @Description:
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-20 19:55:43
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-21 13:34:10
 */

import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-msgInfo',
  templateUrl: './msgInfo.component.html',
  styleUrls: ['./msgInfo.component.scss'],
})
export class MsgInfoComponent implements OnInit {

    createMessage(type: string): void {
        this.message.create(type, `This is a message of ${type}`);
      }

      
  colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime',
  ];

  count = 5;
  dot = true;

  addCount(): void {
    this.count++;
  }

  minCount(): void {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
  }

  constructor(private message: NzMessageService) {}

  ngOnInit() {}
}
