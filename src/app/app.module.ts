import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from './../environments/environment.prod';

import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './about/about.component';
import { PageLayoutModule } from './shared/modules/page-layout/page-layout.module';
import { ToastrErrorHandler } from './toastr-error-handler';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    ToastrModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    PageLayoutModule,
    HttpClientModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: ToastrErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
