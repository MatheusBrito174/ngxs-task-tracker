import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TasksModule } from '../tasks/tasks.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, TasksModule],
})
export class HomeModule {}
