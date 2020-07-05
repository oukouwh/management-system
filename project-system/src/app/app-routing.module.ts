/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-04 12:52:40
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-05 22:16:48
 */ 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
