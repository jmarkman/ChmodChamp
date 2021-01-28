import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'chm-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  _permissionOctal: string = "751";
  _permissionSymbols: string = "-rwxr-x--x";
  _symbols: Record<number, string> = {
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

  set permissionSymbols(symbols: string) {
    this._permissionSymbols = symbols;
  }

  @Input()
  set permissionOctal(permOct: string) {
    this._permissionOctal = permOct;
    this.updatePermissionSymbols(permOct);

  }

  constructor() { }

  ngOnInit(): void {
  }

  private updatePermissionSymbols(permOct: string) {
    let octals: number[] = [];

    if (permOct.length === 0) {
      this.permissionSymbols = `-${this._symbols[0]}${this._symbols[0]}${this._symbols[0]}`
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

    this.permissionSymbols = `-${this._symbols[octals[0]]}${this._symbols[octals[1]]}${this._symbols[octals[2]]}`;
  }

}
