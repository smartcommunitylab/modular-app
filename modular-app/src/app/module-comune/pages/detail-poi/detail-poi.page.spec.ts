import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPoiPage } from './detail-poi.page';

describe('DetailPoiPage', () => {
  let component: DetailPoiPage;
  let fixture: ComponentFixture<DetailPoiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPoiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
