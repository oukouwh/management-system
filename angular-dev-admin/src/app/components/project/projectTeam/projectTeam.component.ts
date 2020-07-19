/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-17 20:47:43
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-19 10:31:57
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
      author: '张半仙',
      avatar: '../../../../assets/imgs/userMM0.jpg',
      content:
        '人为感情烦恼永远是不值得原谅的，感情是奢侈品，有些人一辈子也没有恋爱过。恋爱与瓶花一样，不能保持永久生命。',
      datetime: formatDistance(new Date(), addDays(new Date(), 1))
    },
    {
      author: '小强仔',
      avatar: '../../../../assets/imgs/userMM.jpg',
      content:
        '这个家庭的历史是一架周而复始无法停息的机器，是一个转动着的轮子，这只齿轮，要不是轴会逐渐不可避免地磨损的话，会永远旋转下去。',
      datetime: formatDistance(new Date(), addDays(new Date(), 2))
    },
    {
      author: 'HAO WANG',
      avatar: '../../../../assets/imgs/user0.jpg',
      content:
        '善良人在追求中纵然迷惘，却终将意识到有一条正途。',
      datetime: formatDistance(new Date(), addDays(new Date(), 3))
    },
    {
      author: '隔壁老王',
      avatar: '../../../../assets/imgs/user0.jpg',
      content:
        '他发现了人类行为的一大法则，自己还不知道——那就是，为了要使一个大人或小孩极想干某样事情，只需要设法把那件事情弄得不易到手就行了。',
      datetime: formatDistance(new Date(), addDays(new Date(), 4))
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
