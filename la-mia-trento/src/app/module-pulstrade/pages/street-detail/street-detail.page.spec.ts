import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetDetailPage } from './street-detail.page';

describe('StreetDetailPage', () => {
  let component: StreetDetailPage;
  let fixture: ComponentFixture<StreetDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
