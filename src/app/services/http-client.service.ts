import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {
  

  apiURL = 'http://localhost:6080/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getData(path: String ): Observable<any> {
    return this.http.get(this.apiURL + path)
    .pipe(
      catchError(this.handleError)
    )
  }
  postData(path: String, obj?: any ): Observable<any> {
    return this.http.post(this.apiURL + path, obj, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
    
  }  

  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       errorMessage = error.error.message;
     } else {
       errorMessage = "error " + error.error;
     }
     window.alert(errorMessage);
       return throwError(errorMessage);
  }

}