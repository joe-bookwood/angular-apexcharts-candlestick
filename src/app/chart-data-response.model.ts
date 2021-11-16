import { OhlcData } from './ohlc-data.model';

export interface IChartDataResponse {
  chartId?: number;
  data?: OhlcData[];
}

export class ChartDataResponse implements IChartDataResponse {
  constructor(public chartId: number, public data: OhlcData[]) {}
}
