import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPageEventPage } from './filter-page-event.page';

describe('FilterPageEventPage', () => {
  let component: FilterPageEventPage;
  let fixture: ComponentFixture<FilterPageEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPageEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPageEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
