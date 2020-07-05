/*
 * @Author: HAO WANG
 * @Date: 2020-07-04 12:52:40
 * @LastEditTime: 2020-07-05 22:29:46
 * @LastEditors: hao wang
 * @Description: In User Settings Edit
 * @FilePath: \management-ystem\project-system\src\app\app.component.ts
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  loginClick() {
    this.router.navigate(['./component/home/home.component.html'])
    // alert('success');
  }
}
