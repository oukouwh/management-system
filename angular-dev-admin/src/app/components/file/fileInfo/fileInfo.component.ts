/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-14 14:16:41
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-17 20:33:13
 */ 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileInfo',
  templateUrl: './fileInfo.component.html',
  styleUrls: ['./fileInfo.component.scss']
})
export class FileInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  change(value: boolean): void {
    console.log(value);
  }

}
