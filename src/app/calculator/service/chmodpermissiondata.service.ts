import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChmodPermissionDataService {

  private permissionSource: BehaviorSubject<string> = new BehaviorSubject<string>("751");
  currentPermission$ = this.permissionSource.asObservable();

  constructor() { }

  changePermission(permissionValue: string) {
    this.permissionSource.next(permissionValue);
  }
}
