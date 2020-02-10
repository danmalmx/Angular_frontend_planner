import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PresentationEndpointService } from '../presentation/presentation.endpoint.service';

@Injectable()
export class PresentationService {
    variable: string = "value";
    constructor(
        private endpoindService: PresentationEndpointService) { }

    gets() {
        return this.endpoindService.GetsEndpoint<any[]>();
    }
    get(id?: number) {
        return this.endpoindService.GetEndpoint<any>(id);
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