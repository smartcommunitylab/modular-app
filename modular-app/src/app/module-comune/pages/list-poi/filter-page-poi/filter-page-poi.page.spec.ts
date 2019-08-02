import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPagePoiPage } from './filter-page-poi.page';

describe('FilterPagePoiPage', () => {
  let component: FilterPagePoiPage;
  let fixture: ComponentFixture<FilterPagePoiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPagePoiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPagePoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
