/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-09 17:20:24
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-10 18:48:01
 */ 
import { NgModule } from '@angular/core';

import { IndexRoutingModule } from './index-routing.module';

import { IndexComponent } from './index.component';


@NgModule({
  imports: [IndexRoutingModule],
  declarations: [IndexComponent],
  exports: [IndexComponent]
})
export class IndexModule { }
