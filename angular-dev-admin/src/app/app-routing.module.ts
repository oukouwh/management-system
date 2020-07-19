/*
 * @Description:
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-07 20:15:20
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-19 10:42:57
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/userInfo/user.component';
import { UserListComponent } from './components/user/userList/user-list.component';
import { UserRateComponent } from './components/user/userRate/userRate.component';
import { FileSettingComponent } from './components/file/fileSetting/fileSetting.component';
import { FileInfoComponent } from './components/file/fileInfo/fileInfo.component';
import { ProjectInfoComponent } from './components/project/projectInfo/projectInfo.component';
import { ProjectTeamComponent } from './components/project/projectTeam/projectTeam.component';
import { ErrorPageComponent } from './components/error/errorPage/errorPage.component';
import { SuccessComponent } from './components/error/success/success.component';
import { PlanInfoComponent } from './components/plan/planInfo/planInfo.component';

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
        // 成员一览界面
        path: 'projectTeam',
        component: ProjectTeamComponent,
    },
    {
        // 计划一览界面
        path: 'planInfo',
        component: PlanInfoComponent,
        
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
