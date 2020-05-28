import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeilingfanComponent } from './ceilingfan.component';

describe('CeilingfanComponent', () => {
  let component: CeilingfanComponent;
  let fixture: ComponentFixture<CeilingfanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeilingfanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeilingfanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
