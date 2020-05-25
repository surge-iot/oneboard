import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationNodeComponent } from './location-node.component';

describe('LocationNodeComponent', () => {
  let component: LocationNodeComponent;
  let fixture: ComponentFixture<LocationNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
