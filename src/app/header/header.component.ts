import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle: string = "ChmodChamp";
  pageSubtitle: string = "A calculator for permission levels in Linux"

  constructor() { }

  ngOnInit(): void {
  }

}
