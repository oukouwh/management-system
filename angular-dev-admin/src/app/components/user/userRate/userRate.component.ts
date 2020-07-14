/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-14 11:16:00
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-14 11:44:57
 */ 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userRate',
  templateUrl: './userRate.component.html',
  styleUrls: ['./userRate.component.css'],
})
export class UserRateComponent implements OnInit {
    tooltips = ['非常差', '差','及格', '良好', '优秀'];
    bugValue = 0;
    workValue = 0;
    questionValue = 0;
    teamValue = 0;


    constructor() {}

    ngOnInit() {}
}
