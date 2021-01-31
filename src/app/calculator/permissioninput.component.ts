import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChmodPermissionDataService } from "./service/chmodpermissiondata.service";

@Component({
  selector: 'chm-permissioninput',
  templateUrl: './permissioninput.component.html',
  styleUrls: ['./permissioninput.component.css']
})
export class PermissionInputComponent implements OnInit {

  _permissionDataSubscription: Subscription;
  _permissionOctal: string = "751";
  _permissionSymbols: string = "-rwxr-x--x";
  symbols: Record<number, string> = {
    0: "---",
    1: "--x",
    2: "-w-",
    3: "-wx",
    4: "r--",
    5: "r-x",
    6: "rw-",
    7: "rwx"
  };

  get permissionOctal(): string {
    return this._permissionOctal;
  }

  get permissionSymbols(): string {
    return this._permissionSymbols;
  }

  @Input()
  set permissionOctal(permOct: string) {
    this._permissionOctal = permOct;
    this.updatePermissionSymbols(permOct);
  }

  set permissionSymbols(symbols: string) {
    this._permissionSymbols = symbols;
  }

  constructor(private permissionData: ChmodPermissionDataService) { }

  ngOnInit(): void {
    this._permissionDataSubscription = this.permissionData.currentPermission$.subscribe(p => this.permissionOctal = p);
  }

  private updatePermissionSymbols(permOct: string) {
    let octals: number[] = [];

    if (permOct.length === 0) {
      this.permissionSymbols = `-${this.symbols[0]}${this.symbols[0]}${this.symbols[0]}`
      return;
    }
    
    for (let index = 0; index < 3; index++) {
      let currentNumber = parseInt(this._permissionOctal.charAt(index));
      if (!isNaN(currentNumber)) {
        octals.push(currentNumber);
      } else {
        octals.push(0);
      }
    }

    this.permissionSymbols = `-${this.symbols[octals[0]]}${this.symbols[octals[1]]}${this.symbols[octals[2]]}`;
  }

}
