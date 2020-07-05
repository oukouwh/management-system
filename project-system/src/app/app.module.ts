/*
 * @Author: hao wang
 * @Date: 2020-07-04 12:52:40
 * @LastEditTime: 2020-07-05 22:37:20
 * @LastEditors: hao wang
 * @Description: In User Settings Edit
 * @FilePath: \management-ystem\project-system\src\app\app.module.ts
 */ 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// 第三方引用
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 国际化
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NavigationComponent } from './component/navigation/navigation.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContentComponent } from './component/content/content.component';
import { HomeComponent } from './component/home/home.component';
// 引入自定义模块
import { UserModule } from './module/user/user.module';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent, 
    ContentComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // 引入自定义的UserModule
    UserModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
