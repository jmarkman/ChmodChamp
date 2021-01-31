import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import PermissionGrid from './PermissionGrid';
import { ChmodPermissionDataService } from './service/chmodpermissiondata.service';

@Component({
  selector: 'chm-permissiontable',
  templateUrl: './permissiontable.component.html',
  styleUrls: ['./permissiontable.component.css']
})
export class PermissionTableComponent implements OnInit {

  permissionGrid: PermissionGrid;
  permissionOctal: string;
  permissionDataSubscription: Subscription;

  constructor(private permissionData: ChmodPermissionDataService) {

    this.permissionDataSubscription = this.permissionData.currentPermission$.subscribe(p => this.permissionOctal = p);

    this.permissionGrid = new PermissionGrid({
      ownerRead: true,
      ownerWrite: true,
      ownerExecute: true,
      groupRead: true,
      groupWrite: false,
      groupExecute: true,
      otherRead: false,
      otherWrite: false,
      otherExecute: true
    });
  }

  ngOnInit(): void {
  }

  onPermTableClick(permissionButton: string) {
    if (permissionButton in this.permissionGrid) {
      this.permissionGrid[permissionButton] = !this.permissionGrid[permissionButton];
    }

    this.permissionData.changePermission(this.permissionGrid.generatePermissionOctal());
  }
}