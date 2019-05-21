import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPathPage } from './list-path.page';

describe('ListPoiPage', () => {
  let component: ListPathPage;
  let fixture: ComponentFixture<ListPathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPathPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
