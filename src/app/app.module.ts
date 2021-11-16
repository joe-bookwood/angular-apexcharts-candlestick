import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CandlestickChartComponent } from './candlestick-chart/candlestick-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OhlcChartService } from './ohlc-chart.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, NgApexchartsModule],
  declarations: [AppComponent, HelloComponent, CandlestickChartComponent],
  bootstrap: [AppComponent],
  providers: [OhlcChartService],
})
export class AppModule {}
