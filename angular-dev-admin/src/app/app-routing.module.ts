/*
 * @Description:
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-07 20:15:20
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-13 17:12:24
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/userInfo/user.component';
import { UserListComponent } from './components/user/userList/user-list.component'

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    // {
    //     path: 'user',
    //     loadChildren: () =>
    //     import('./components/index/index.module').then((m) => m.IndexModule),
    // },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
    },
    {
        path: 'user',
        component: UserComponent,
    },
    {
        path: 'userList',
        component: UserListComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
