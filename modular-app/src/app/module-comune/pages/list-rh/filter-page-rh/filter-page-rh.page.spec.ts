import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPageRhPage } from './filter-page-rh.page';

describe('FilterPageRhPage', () => {
  let component: FilterPageRhPage;
  let fixture: ComponentFixture<FilterPageRhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPageRhPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPageRhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
