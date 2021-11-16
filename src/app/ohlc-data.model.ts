import dayjs=require("dayjs");

export interface IOhlcData {
  id?: number;
  open?: number | null;
  high?: number | null;
  low?: number | null;
  close?: number | null;
  volume?: number | null;
  count?: number | null;
  time?: dayjs.Dayjs | null;
  vwap?: number | null;
}

export class OhlcData implements IOhlcData {
  constructor(
    public id?: number,
    public open?: number | null,
    public high?: number | null,
    public low?: number | null,
    public close?: number | null,
    public volume?: number | null,
    public count?: number | null,
    public time?: dayjs.Dayjs | null,
    public vwap?: number | null,
  ) {}
}

export function getOhlcDataIdentifier(ohlc: IOhlcData): number | undefined {
  return ohlc.id;
}
