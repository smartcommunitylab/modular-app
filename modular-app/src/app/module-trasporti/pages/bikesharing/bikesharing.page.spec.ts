import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesharingPage } from './bikesharing.page';

describe('BikesharingPage', () => {
  let component: BikesharingPage;
  let fixture: ComponentFixture<BikesharingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikesharingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesharingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
