import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStreetsPage } from './list-streets.page';

describe('ListStreetsPage', () => {
  let component: ListStreetsPage;
  let fixture: ComponentFixture<ListStreetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStreetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStreetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
