import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSettingsPage } from './home-settings.page';

describe('HomeSettingsPage', () => {
  let component: HomeSettingsPage;
  let fixture: ComponentFixture<HomeSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSettingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
