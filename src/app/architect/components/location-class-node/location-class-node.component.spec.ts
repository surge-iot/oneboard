import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationClassNodeComponent } from './location-class-node.component';

describe('LocationClassNodeComponent', () => {
  let component: LocationClassNodeComponent;
  let fixture: ComponentFixture<LocationClassNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationClassNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationClassNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
