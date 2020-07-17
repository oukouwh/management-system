/*
 * @Description:
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-07 20:15:20
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-17 20:54:08
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/userInfo/user.component';
import { UserListComponent } from './components/user/userList/user-list.component';
import { UserRateComponent } from './components/user/userRate/userRate.component';
import { ErrorPageComponent } from './components/error/errorPage/errorPage.component';
import { SuccessComponent } from './components/error/success/success.component';
import { FileSettingComponent } from './components/file/fileSetting/fileSetting.component';
import { FileInfoComponent } from './components/file/fileInfo/fileInfo.component';
import { ProjectInfoComponent } from './components/project/projectInfo/projectInfo.component';

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
        // 文件信息一览界面
        path: 'fileInfo',
        component: FileInfoComponent,
    },
    {
        // 文件设置界面
        path: 'fileSetting',
        component: FileSettingComponent,
    },
    {
        // 项目一览界面
        path: 'projectInfo',
        component: ProjectInfoComponent,
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
