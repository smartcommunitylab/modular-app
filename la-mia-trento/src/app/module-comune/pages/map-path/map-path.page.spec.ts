import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPathPage } from './map-path.page';

describe('MapPathPage', () => {
  let component: MapPathPage;
  let fixture: ComponentFixture<MapPathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPathPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
