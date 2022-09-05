import { NewTaskFormState } from './../../../states/new-task-form.state';
import { NgxsModule } from '@ngxs/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomFormsModule } from '../custom-forms/custom-forms.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { GeneralModule } from '../general/general.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    CustomFormsModule,
    FontAwesomeModule,
    GeneralModule,
    NgxsModule.forFeature([NewTaskFormState]),
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class PageLayoutModule {}
