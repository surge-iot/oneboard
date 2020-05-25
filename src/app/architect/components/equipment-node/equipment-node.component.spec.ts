import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentNodeComponent } from './equipment-node.component';

describe('EquipmentNodeComponent', () => {
  let component: EquipmentNodeComponent;
  let fixture: ComponentFixture<EquipmentNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
