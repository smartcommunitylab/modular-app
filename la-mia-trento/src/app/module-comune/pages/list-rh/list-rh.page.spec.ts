import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRHPage } from './list-rh.page';

describe('ListPoiPage', () => {
  let component: ListRHPage;
  let fixture: ComponentFixture<ListRHPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRHPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
