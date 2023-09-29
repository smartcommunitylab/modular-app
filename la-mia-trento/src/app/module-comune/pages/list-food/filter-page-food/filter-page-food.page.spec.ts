import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPageFoodPage } from './filter-page-food.page';

describe('FilterPageFoodPage', () => {
  let component: FilterPageFoodPage;
  let fixture: ComponentFixture<FilterPageFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPageFoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPageFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
