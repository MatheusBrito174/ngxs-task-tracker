import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskViewComponent } from './new-task-view.component';

describe('NewTaskViewComponent', () => {
  let component: NewTaskViewComponent;
  let fixture: ComponentFixture<NewTaskViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTaskViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
