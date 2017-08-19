import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'; 
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PrayerHouseComponent } from './prayerhouse/prayerhouse.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, ReactiveFormsModule],
    declarations: [AppComponent, PrayerHouseComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
