import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './../environments/environment.prod';

import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { PageLayoutModule } from './shared/modules/page-layout/page-layout.module';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PageLayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
