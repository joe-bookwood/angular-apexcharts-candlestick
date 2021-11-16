import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CandlestickChartComponent } from './candlestick-chart/candlestick-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  imports:      [ BrowserModule, FormsModule,NgApexchartsModule ],
  declarations: [ AppComponent, HelloComponent , CandlestickChartComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
