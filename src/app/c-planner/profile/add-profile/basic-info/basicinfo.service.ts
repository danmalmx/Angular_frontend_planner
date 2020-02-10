import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BasicInfoEndpointService } from './basicinfo.endpoint.service';

@Injectable()
export class BasicInfoService {
    variable: string = "value";
    constructor(
        private router: Router,
        private endpoindService: BasicInfoEndpointService) { }

    gets() {
        return this.endpoindService.GetsEndpoint<any[]>();
    }
    get(id?: number) {
        return this.endpoindService.GetEndpoint<any>(id);
    }
    getByUserId(userId: string) {
        return this.endpoindService.GetByUserIdEndpoint<any>(userId);
    }
    post(object: any) {
        return this.endpoindService.PostEndpoint<any>(object);
    }

    put(object: any, id: number) {
        return this.endpoindService.PutEndpoint<any>(object, id);
    }

    delete(id: number): Observable<any> {
        return this.endpoindService.DeleteEndpoint(id);
    }
}