import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPoiPage } from './list-poi.page';

describe('ListPoiPage', () => {
  let component: ListPoiPage;
  let fixture: ComponentFixture<ListPoiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPoiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
