import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  getMensaje(): Observable<string> {
    return of('Hola desde el servicio');
  }

  getMensaje2(): Observable<string> {
    return new Observable((observer) => {
      observer.next('Hola');
      observer.next('Angular');
      observer.complete();
    });
  }

  getMensaje3(): Observable<string> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next('Dato recibido');
        observer.complete();
      }, 2000);
    });
  }

  
}
