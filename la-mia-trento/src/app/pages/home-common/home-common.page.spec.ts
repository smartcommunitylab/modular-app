import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCommonPage } from './home-common.page';

describe('HomeCommonPage', () => {
  let component: HomeCommonPage;
  let fixture: ComponentFixture<HomeCommonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCommonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCommonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
