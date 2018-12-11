import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';

import { YoutubePlayerModule } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { WeatherComponent } from './weather/weather.component';
import { CareerComponent } from './career/career.component';
import { CareerResultComponent } from './career/career-result/career-result.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { CurrencyComponent } from './currency/currency.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MycalenderComponent } from './mycalender/mycalender.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { MyappComponent } from './myapp/myapp.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    CareerComponent,
    CareerResultComponent,
    CurrencyComponent,
    MycalenderComponent,
    MyappComponent
  ],
  imports: [
    GooglePlaceModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    YoutubePlayerModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDs0WJS-0UQ8F3N-8qhxyPXDniFVmS0uHQ'
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgbModalModule,
    FlatpickrModule.forRoot()
  ],
  providers: [],
  entryComponents: [CareerResultComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
