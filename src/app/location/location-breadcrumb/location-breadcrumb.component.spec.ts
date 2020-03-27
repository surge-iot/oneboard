import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBreadcrumbComponent } from './location-breadcrumb.component';

describe('LocationBreadcrumbComponent', () => {
  let component: LocationBreadcrumbComponent;
  let fixture: ComponentFixture<LocationBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
