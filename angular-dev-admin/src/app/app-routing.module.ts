/*
 * @Description:
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-07 20:15:20
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-11 15:26:18
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },
    // {
    //     path: 'index',
    //     loadChildren: () =>
    //     import('./components/index/index.module').then((m) => m.IndexModule),
    // },
    // { 
    //     path: '', 
    //     pathMatch: 'full', 
    //     redirectTo: '/index' 
    // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
