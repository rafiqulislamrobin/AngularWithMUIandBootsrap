import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-my-sheet',
  templateUrl: './my-sheet.component.html',
  styleUrls: ['./my-sheet.component.css']
})
export class MySheetComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private _bottomSheetRef: MatBottomSheetRef<MySheetComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
