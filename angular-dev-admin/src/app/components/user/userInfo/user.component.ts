/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-11 15:20:19
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-14 22:13:36
 */ 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editInfo() {
    alert('不用点了，不管事。23333');
  }

}
