import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-point-command-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  constructor() { }
  switchValue : boolean;

  @Output()
  switchChange = new EventEmitter<boolean>();

  @Input()
  get switch(){
    return this.switchValue;
  }

  set switch(val) {
    this.switchValue = val;
    this.switchChange.emit(this.switchValue);
  }
  ngOnInit(): void {
  }

}
