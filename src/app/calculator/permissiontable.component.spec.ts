import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissiontableComponent } from './permissiontable.component';

describe('PermissiontableComponent', () => {
  let component: PermissiontableComponent;
  let fixture: ComponentFixture<PermissiontableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissiontableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissiontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
