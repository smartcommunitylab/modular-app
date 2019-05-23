import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingMetersPage } from './parking-meters.page';

describe('ParkingMetersPage', () => {
  let component: ParkingMetersPage;
  let fixture: ComponentFixture<ParkingMetersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingMetersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingMetersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
