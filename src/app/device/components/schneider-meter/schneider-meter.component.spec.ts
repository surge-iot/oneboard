import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchneiderMeterComponent } from './schneider-meter.component';

describe('SchneiderMeterComponent', () => {
  let component: SchneiderMeterComponent;
  let fixture: ComponentFixture<SchneiderMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchneiderMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchneiderMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
