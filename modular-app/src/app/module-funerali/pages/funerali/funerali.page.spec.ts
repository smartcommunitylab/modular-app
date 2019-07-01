import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuneraliPage } from './funerali.page';

describe('FuneraliPage', () => {
  let component: FuneraliPage;
  let fixture: ComponentFixture<FuneraliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuneraliPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuneraliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
