import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-point-command-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent implements OnInit {


  constructor() { }
  speedValue: number;

  @Output()
  speedChange = new EventEmitter<number>();

  @Input()
  get speed() {
    return this.speedValue;
  }

  set speed(val) {
    this.speedValue = val;
    this.speedChange.emit(this.speedValue);
  }

  @Input() disabled: boolean;

  ngOnInit(): void {
  }

}
