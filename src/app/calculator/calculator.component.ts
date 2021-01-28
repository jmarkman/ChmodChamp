import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chm-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  _permissionOctal: string = "";

  get permissionOctal(): string {
    return this._permissionOctal;
  }

  set permissionOctal(permOctal: string) {
    this._permissionOctal = permOctal;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
