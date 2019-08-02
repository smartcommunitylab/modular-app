import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingModalComponent } from './loading-modal.component';

describe('LoadingModalComponent', () => {
  let component: LoadingModalComponent;
  let fixture: ComponentFixture<LoadingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
