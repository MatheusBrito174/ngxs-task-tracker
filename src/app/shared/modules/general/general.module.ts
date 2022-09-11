import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [ButtonComponent, CardComponent, SpinnerComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, CardComponent, SpinnerComponent],
})
export class GeneralModule {}
