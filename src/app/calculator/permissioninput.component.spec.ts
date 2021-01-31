import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissioninputComponent } from './permissioninput.component';

describe('PermissioninputComponent', () => {
  let component: PermissioninputComponent;
  let fixture: ComponentFixture<PermissioninputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissioninputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissioninputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
