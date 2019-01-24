import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:55478/api/Book/';

  getUrl(url: string) {
    let apiUrl = `${this.baseUrl}${url}`;
    return apiUrl;
  }

  getObs(url: string) {
     return this.http.get(url);  
  }

  postObs(url: string, options: any) {
    return this.http.post(url,null,options);
  }
  
}