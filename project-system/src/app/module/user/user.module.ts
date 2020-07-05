/*
 * @Author: HAO WANG
 * @Date: 2020-07-04 20:36:41
 * @LastEditTime: 2020-07-05 09:22:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \management-ystem\project-system\src\app\module\user\user.module.ts
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './compontents/profile/profile.component';
import { AuditComponent } from './compontents/audit/audit.component';

@NgModule({
  // 声明组件,存放user模块下面的所有组件
  declarations: [
    ProfileComponent,
    AuditComponent,
  ],

  // 把user模块中的组件暴露给外面供其调用
  exports: [ProfileComponent, AuditComponent],

  // 服务
  providers:[],

  imports: [CommonModule],
})
export class UserModule {}
