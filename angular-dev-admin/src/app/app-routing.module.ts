/*
 * @Description:
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-07 20:15:20
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-14 11:48:21
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/userInfo/user.component';
import { UserListComponent } from './components/user/userList/user-list.component';
import { UserRateComponent } from './components/user/userRate/userRate.component';

const routes: Routes = [
    {
        // 登录界面
        path: 'login',
        component: LoginComponent,
    },
    {
        // 初始化加载跳转到登录界面
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
    },
    {
        // 用户信息界面
        path: 'user',
        component: UserComponent,
    },
    {
        // 用户列表信息
        path: 'userList',
        component: UserListComponent,
    },
    {
        // 用户评价
        path: 'userRate',
        component: UserRateComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
