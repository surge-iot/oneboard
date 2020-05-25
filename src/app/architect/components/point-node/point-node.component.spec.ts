import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointNodeComponent } from './point-node.component';

describe('PointNodeComponent', () => {
  let component: PointNodeComponent;
  let fixture: ComponentFixture<PointNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
