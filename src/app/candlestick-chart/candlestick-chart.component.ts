import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Dayjs } from 'dayjs';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
  ChartComponent,
} from 'ng-apexcharts';
import { filter, map, Observable, Subject, takeUntil } from 'rxjs';
import { IChartDataResponse } from '../chart-data-response.model';
import { OhlcChartService } from '../ohlc-chart.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.css'],
})
export class CandlestickChartComponent implements OnInit, OnDestroy {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  private readonly onDestroy$ = new Subject<void>();

  public data$: Observable<IChartDataResponse | undefined>;
  constructor(private ohlcChartService: OhlcChartService) {
    this.data$ = ohlcChartService
      .loadOhclData()
      .pipe(
        map((response) => (response.body === null ? undefined : response.body))
      );

    const test: ApexAxisChartSeries = [
      {
        name: 'candle',
        data: [1, 2, 3, 4, 5],
      },
    ];

    this.data$
      .pipe(
        filter((x) => x?.data !== undefined),
        map((values) => {
          if (values?.data !== undefined) {
            const ohlcData: ApexAxisChartSeries = [
              {
                name: 'candle',
                data: values.data.map((v) => ({
                  x: v.time ? v.time : undefined,
                  y: [v.open, v.high, v.low, v.close],
                })),
              },
            ];
            return ohlcData;
          } else {
            return undefined;
          }
        })
      )
      // unsubscribe, wenn das Destroy-Subject eine Event ausloest
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((value) => {
        // eslint-disable-next-line no-console
        console.log('log: ', value);
        this.chartOptions.series = value;
        this.chart?.updateSeries(this.chartOptions.series);
      });

    console.log(test);

    this.chartOptions = {
      series: [
        {
          name: 'candle',
          data: [],
        },
      ],
      chart: {
        type: 'candlestick',
        height: 350,
      },
      title: {
        text: 'CandleStick Chart',
        align: 'left',
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    };
  }
  ngOnDestroy(): void {
    this.onDestroy$.unsubscribe;
  }

  ngOnInit() {}
}
