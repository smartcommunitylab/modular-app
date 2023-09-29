import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrasportiPage } from './home-trasporti.page';

describe('HomeTrasportiPage', () => {
  let component: HomeTrasportiPage;
  let fixture: ComponentFixture<HomeTrasportiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTrasportiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTrasportiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
