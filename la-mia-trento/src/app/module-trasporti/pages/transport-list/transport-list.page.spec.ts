import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportListPage } from './transport-list.page';

describe('TransportListPage', () => {
  let component: TransportListPage;
  let fixture: ComponentFixture<TransportListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
