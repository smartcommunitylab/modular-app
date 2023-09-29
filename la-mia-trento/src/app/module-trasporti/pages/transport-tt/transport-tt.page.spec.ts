import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTtPage } from './transport-tt.page';

describe('TransportTtPage', () => {
  let component: TransportTtPage;
  let fixture: ComponentFixture<TransportTtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
