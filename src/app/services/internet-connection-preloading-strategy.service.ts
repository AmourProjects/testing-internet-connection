import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { InternetConnectionService } from './internet-connection.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InternetConnectionPreloadingStrategy
  implements PreloadingStrategy {
  constructor(private connectionService: InternetConnectionService) { }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const quality = this.connectionService.getSpeed();

    if (quality === '5G') {
      return load();
    } else {
      return of(null);
    }
  }
}
