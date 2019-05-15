import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPathPage } from './detail-path.page';

describe('DetailPoiPage', () => {
  let component: DetailPathPage;
  let fixture: ComponentFixture<DetailPathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPathPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
