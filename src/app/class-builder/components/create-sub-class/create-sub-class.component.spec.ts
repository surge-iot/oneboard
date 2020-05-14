import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubClassComponent } from './create-sub-class.component';

describe('CreateSubClassComponent', () => {
  let component: CreateSubClassComponent;
  let fixture: ComponentFixture<CreateSubClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
