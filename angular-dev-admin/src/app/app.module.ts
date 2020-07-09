/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-07 20:15:20
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-09 21:55:37
 */ 
// Angular组件放置区域↓↓↓↓↓↓↓↓↓↓↓START↓↓↓↓↓↓↓↓↓↓↓↓↓↓添加angula组件区域
import { NgModule } from '@angular/core';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular组件放置区域↑↑↑↑↑↑↑↑↑END↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 程序加载进入组件放置区域↓↓↓↓↓↓↓↓↓↓↓START↓↓↓↓↓↓↓↓↓↓↓↓↓↓添加程序加载区域
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// 程序加载进入组件放置区域↑↑↑↑↑↑↑↑↑END↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 引入NG-ZERRO-ANTD组件↓↓↓↓↓↓↓↓↓↓↓START↓↓↓↓↓↓↓↓↓↓↓↓↓↓添加nz组件区域
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconsProviderModule } from './icons-provider.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule, NzButtonModule } from 'ng-zorro-antd';

// 引入NG-ZERRO-ANTD组件↑↑↑↑↑↑↑↑↑END↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // 引入的第三方module全部在下面配置
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
    NzButtonModule,
    NzBreadCrumbModule,
    IconsProviderModule,

  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }