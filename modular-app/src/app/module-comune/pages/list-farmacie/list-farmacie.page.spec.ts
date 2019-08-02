import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFarmaciePage } from './list-farmacie.page';

describe('ListFarmaciePage', () => {
  let component: ListFarmaciePage;
  let fixture: ComponentFixture<ListFarmaciePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFarmaciePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFarmaciePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
