import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ISummary } from '../entities/ISummary.model';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class SummaryService {

  apiUrl = "http://localhost:49156/api/covid" 

  constructor(private httpClient: HttpClient) { }

  getSummary(): Observable<ISummary> {
    return this.httpClient.get<ISummary>(this.apiUrl)
    .pipe(
      tap(_ => console.log('fetched summary'),
      catchError(this.handleError<ISummary>('getSummary'))
    ));
  }


  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed> ${error.message}`);
      return of (result as T);
    }
  }
}
