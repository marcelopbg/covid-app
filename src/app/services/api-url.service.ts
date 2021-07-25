import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  configUrl = '../../assets/api.json';

  constructor(private httpClient: HttpClient) {
    
   }
   getConfig() {
    return this.httpClient.get<{address: string}>(this.configUrl);
  }
}
