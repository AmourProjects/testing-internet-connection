import { Injectable } from '@angular/core';

declare var navigator: any;

@Injectable({
  providedIn: 'root'
})
export class InternetConnectionService {

  constructor() { }

  getSpeed(): string {
    const connection = navigator.connection;
    const type = connection.effectiveType;
    const speed = connection.downlink;

    if (type === 'slow-2g' || speed < 0.5) {
      return '2G';
    } else if (type === '2g' || speed < 1) {
      return '3G';
    } else {
      return '5G';
    }
  }
}
