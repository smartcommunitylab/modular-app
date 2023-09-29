import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopSingleLineComponent } from './stop-single-line.component';

describe('StopSingleLineComponent', () => {
  let component: StopSingleLineComponent;
  let fixture: ComponentFixture<StopSingleLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopSingleLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopSingleLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
