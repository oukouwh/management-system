/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-17 20:47:43
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-18 20:57:58
 */ 
import { Component, OnInit } from '@angular/core';

interface Person {
  key: string;
  name: string;
  job: string;
  status: string;
}

@Component({
  selector: 'app-projectTeam',
  templateUrl: './projectTeam.component.html',
  styleUrls: ['./projectTeam.component.scss']
})
export class ProjectTeamComponent implements OnInit {


  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      job: 'PL',
      status: '对应中'
    },
    {
      key: '2',
      name: 'Jim Green',
      job: 'PG',
      status: '确认中'
    },
    {
      key: '3',
      name: 'Joe Black',
      job: 'SE',
      status: '提案中'
    }
  ];

  tabs = [
    {
      active: true,
      name: 'Tab 1',
      icon: 'apple'
    },
    {
      active: false,
      name: 'Tab 2',
      icon: 'android'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
