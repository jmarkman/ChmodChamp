import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import PermissionGrid from './PermissionGrid';
import { ChmodPermissionDataService } from './service/chmodpermissiondata.service';

@Component({
  selector: 'chm-permissiontable',
  templateUrl: './permissiontable.component.html',
  styleUrls: ['./permissiontable.component.css']
})
export class PermissionTableComponent implements OnInit {

  permissionGrid: PermissionGrid = new PermissionGrid({
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
  permissionOctal: string;
  permissionDataSubscription: Subscription;

  constructor(private permissionData: ChmodPermissionDataService) {

  }

  ngOnInit(): void {
    this.permissionDataSubscription = this.permissionData.currentPermission$.subscribe(p => this.permissionGrid.updateUsingPermissionOctal(p));
  }

  onPermTableClick(permissionButton: string) {
    if (permissionButton in this.permissionGrid) {
      this.permissionGrid[permissionButton] = !this.permissionGrid[permissionButton];
    }

    this.permissionData.changePermission(this.permissionGrid.generatePermissionOctal());
  }
}