import { Observable, Subscription } from 'rxjs';
import { NewTaskFormState } from './../../../../states/new-task-form.state';
import { Select, Store } from '@ngxs/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { NewTaskFormActions } from 'src/app/actions/new-task-form.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  @Select(NewTaskFormState.showNewTaskForm)
  showNewTaskForm$!: Observable<boolean>;

  showNewTaskForm!: boolean;

  faCalendarCheck = faCalendarCheck;

  constructor(readonly router: Router, private readonly store: Store) {}

  ngOnInit(): void {
    this.subscription.add(
      this.showNewTaskForm$.subscribe((value) => (this.showNewTaskForm = value))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleFormExibition(): void {
    this.store.dispatch(new NewTaskFormActions.ToggleExibition());
  }

  showShowFormButton(): boolean {
    if (!this.isHomeRoute()) {
      return false;
    }

    return !this.showNewTaskForm;
  }

  showHideFormButton(): boolean {
    if (!this.isHomeRoute()) {
      return false;
    }

    return !this.showShowFormButton();
  }

  isHomeRoute(): boolean {
    return this.router.url === '/home';
  }
}
