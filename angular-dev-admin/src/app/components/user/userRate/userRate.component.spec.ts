/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserRateComponent } from './userRate.component';

describe('UserRateComponent', () => {
  let component: UserRateComponent;
  let fixture: ComponentFixture<UserRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
