import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MySheetComponent } from './my-sheet/my-sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private _bottomSheet : MatBottomSheet){

  }
  title = 'AngularWithMaterial';
  openBottomSheet(){
    this._bottomSheet.open(MySheetComponent);
  }
}


