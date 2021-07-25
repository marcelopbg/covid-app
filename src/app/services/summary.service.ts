import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ISummary } from '../entities/ISummary.model';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ApiUrlService } from './api-url.service';
@Injectable({ providedIn: 'root' })

export class SummaryService {

  constructor(private httpClient: HttpClient, private apiService: ApiUrlService) {
   }

  getSummary(apiUrl: string): Observable<ISummary> {
    return this.httpClient.get<ISummary>(`${apiUrl}/api/covid`)
    .pipe(
      tap(_ => console.log('fetched summary'),
      catchError(this.handleError<ISummary>('getSummary'))
    ));
  }

  getConfig(): Observable<{address: string}> {
    return this.apiService.getConfig();
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed> ${error.message}`);
      return of (result as T);
    }
  }
}
