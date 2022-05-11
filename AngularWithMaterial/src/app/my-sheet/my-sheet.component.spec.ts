import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySheetComponent } from './my-sheet.component';

describe('MySheetComponent', () => {
  let component: MySheetComponent;
  let fixture: ComponentFixture<MySheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
