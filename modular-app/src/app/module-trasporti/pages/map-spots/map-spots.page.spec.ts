import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSpotsPage } from './map-spots.page';

describe('MapSpotsPage', () => {
  let component: MapSpotsPage;
  let fixture: ComponentFixture<MapSpotsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSpotsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSpotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
