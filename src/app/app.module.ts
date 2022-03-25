import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { parentComponentComponent } from './components/parent-component/parent-component.component';
import { CommonModule } from '@angular/common';
import { basicInfoComponent } from './components/basic-info/basic-info.component';
import { AddressComponent } from './components/other-info/address.component';

@NgModule({
  imports:      [ CommonModule, BrowserModule, FormsModule,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent,parentComponentComponent,basicInfoComponent, AddressComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
