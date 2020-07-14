/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-11 15:20:19
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-14 18:23:23
 */ 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editInfo() {
    alert('不用点了，不管事。23333');
  }

}
