import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationErrorMsgComponent } from './validation-error-msg.component';

describe('ValidationErrorMsgComponent', () => {
  let component: ValidationErrorMsgComponent;
  let fixture: ComponentFixture<ValidationErrorMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationErrorMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationErrorMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
