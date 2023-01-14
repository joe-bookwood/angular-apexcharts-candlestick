import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(timezone);
dayjs.extend(utc);

export class TimeUtil {

  public readonly timeZone: string = dayjs.tz.guess();


  public diffInMinutes(lastIso: string, startIso: string): number {
    const last: Date = new Date(lastIso);
    const start: Date = new Date(startIso);

    return (start.getTime() - last.getTime()) / 60000;
  }

  public now(): string {
    const date: Date = new Date();
    return date.toISOString();
  }

  public toLocal(time: dayjs.Dayjs): Date {

    // eslint-disable-next-line no-console
    console.log('Zulu time:', time);
    const zDate: Date = time.toDate();
    // eslint-disable-next-line no-console
    console.log('convert to:', this.timeZone);
    const local: dayjs.Dayjs = dayjs(zDate,this.timeZone);

    return local.toDate();
  }

}