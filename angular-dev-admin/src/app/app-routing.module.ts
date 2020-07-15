/*
 * @Description:
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-07 20:15:20
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-15 21:32:43
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/userInfo/user.component';
import { UserListComponent } from './components/user/userList/user-list.component';
import { UserRateComponent } from './components/user/userRate/userRate.component';
import { ErrorPageComponent } from './components/error/errorPage/errorPage.component';
import { SuccessComponent } from './components/error/success/success.component';

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
    {
        // 404界面
        path: 'errorPage',
        component: ErrorPageComponent,
    },
    {
        // success界面
        path: 'success',
        component: SuccessComponent,
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
