import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLeaveComponent } from './display-leave.component';

describe('DisplayLeaveComponent', () => {
  let component: DisplayLeaveComponent;
  let fixture: ComponentFixture<DisplayLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayLeaveComponent]
    });
    fixture = TestBed.createComponent(DisplayLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
