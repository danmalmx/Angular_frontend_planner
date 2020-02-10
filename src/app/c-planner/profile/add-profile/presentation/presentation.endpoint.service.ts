import { Injectable, Injector } from '@angular/core';
import { EndpointFactory } from '../../../../services/endpoint-factory.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../../../services/configurations.service';

@Injectable()
export class PresentationEndpointService extends EndpointFactory {
    //controller action methods
  private readonly _getsUrl: string = "/api/presentationprofiles";
  private readonly _getUrl: string = "/api/presentationprofiles";
  private readonly _postUrl: string = "/api/presentationprofiles";
  private readonly _putUrl: string = "/api/presentationprofiles";
  private readonly _deleteUrl: string = "/api/presentationprofiles";

  get getsUrl() { return this.configurations.baseUrl + this._getsUrl; }
  get getUrl() { return this.configurations.baseUrl + this._getUrl; }
  get getPutUrl() { return this.configurations.baseUrl + this._putUrl; }
  get getPostUrl() { return this.configurations.baseUrl + this._postUrl; }
  get getDeleteUrl() { return this.configurations.baseUrl + this._deleteUrl; }


  constructor(http: HttpClient, configurations: ConfigurationService, injector: Injector) {
    super(http, configurations, injector);
  }

  GetsEndpoint<T>(): Observable<T> {
     let endpointUrl = this.getsUrl
    return this.http.get<T>(endpointUrl, this.getRequestHeaders()).pipe<T>(
        catchError(this.errorHandl)
      )
  }

  GetEndpoint<T>(id?:number): Observable<T> {
    let endpointUrl = id ? `${this.getUrl}/${id}` : this.getUrl;
   return this.http.get<T>(endpointUrl, this.getRequestHeaders()).pipe<T>(
    catchError(this.errorHandl)
  )
 }

  PostEndpoint<T>(systemMetaObject: any): Observable<T> {
    return this.http.post<T>(this.getPostUrl, JSON.stringify(systemMetaObject), this.getRequestHeaders()).pipe<T>(
        catchError(this.errorHandl)
        );
  }

  PutEndpoint<T>(object: any, id?:number): Observable<T> {
    let endpointUrl = id ? `${this.getPutUrl}/${id}` : this.getPutUrl;
    return this.http.put<T>(endpointUrl, JSON.stringify(object), this.getRequestHeaders()).pipe<T>(
        catchError(this.errorHandl)
        );
  }
  DeleteEndpoint<T>(id: number): Observable<T> {
    let endpointUrl = `${this.getDeleteUrl}/${id}`;
    return this.http.delete<T>(endpointUrl, this.getRequestHeaders()).pipe<T>(
        catchError(this.errorHandl)
        );
  }
}