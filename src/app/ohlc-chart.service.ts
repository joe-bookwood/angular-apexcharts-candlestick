import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChartDataResponse } from './chart-data-response.model';

export type ChartDataResponseType = HttpResponse<IChartDataResponse>;

@Injectable()
export class OhlcChartService {
  constructor(protected http: HttpClient) {}

  loadOhclData(): Observable<ChartDataResponseType> {
    return this.http.get<IChartDataResponse>('/assets/ohlc.json', {
      observe: 'response',
    });
  }
}
