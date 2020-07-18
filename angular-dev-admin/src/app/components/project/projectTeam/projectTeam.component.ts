/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-17 20:47:43
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-18 23:53:00
 */ 
import { Component, OnInit } from '@angular/core';
import { addDays, formatDistance } from 'date-fns';

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

  data = [
    {
      author: 'Jack',
      avatar: '../../../../assets/imgs/userMM0.jpg',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: formatDistance(new Date(), addDays(new Date(), 1))
    },
    {
      author: 'Elliot',
      avatar: '../../../../assets/imgs/userMM.jpg',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: formatDistance(new Date(), addDays(new Date(), 2))
    },
    {
      author: 'HAO WANG',
      avatar: '../../../../assets/imgs/user0.jpg',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: formatDistance(new Date(), addDays(new Date(), 3))
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
