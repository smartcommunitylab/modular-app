import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristServicesPage } from './tourist-services.page';

describe('TouristServicesPage', () => {
  let component: TouristServicesPage;
  let fixture: ComponentFixture<TouristServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristServicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
