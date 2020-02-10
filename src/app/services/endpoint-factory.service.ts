// =============================
// Email: info@scwg.com
// www.swcg.com
// =============================

import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { mergeMap, switchMap, catchError } from 'rxjs/operators';
import { ConfigurationService } from './configurations.service';

@Injectable()
export class EndpointFactory {
  static readonly apiVersion: string = "1";

  private readonly _loginUrl: string = "/connect/token";

  private get loginUrl() { return this.configurations.tokenUrl + this._loginUrl; }

  constructor(protected http: HttpClient, protected configurations: ConfigurationService, private injector: Injector) { }

  getLoginEndpoint<T>(userName: string, password: string): Observable<T> {
    let header = new HttpHeaders(
      { 'Content-Type': 'application/x-www-form-urlencoded',
      // 'Access-Control-Allow-Methods': "GET,POST,OPTIONS,DELETE,PUT" 
    },
      );
      console.log(header)
    let params = new HttpParams()
      .append('username', userName)
      .append('password', password)
    return this.http.post<T>(this.loginUrl, params, { headers: header });
  }

  public getRequestHeaders(): { headers: HttpHeaders | { [header: string]: string | string[]; } } {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ',
      'Content-Type': 'application/json'
    });
    return { headers: headers };
  }
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}