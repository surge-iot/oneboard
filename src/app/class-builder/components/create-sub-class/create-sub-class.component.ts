import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-create-sub-class',
  templateUrl: './create-sub-class.component.html',
  styleUrls: ['./create-sub-class.component.css']
})
export class CreateSubClassComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<CreateSubClassComponent>) { }

  ngOnInit(): void {
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
