import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable()
export class ConfigurationService {
    public baseUrl = environment.baseUrl 
    public tokenUrl = environment.tokenUrl || environment.baseUrl;
    public loginUrl = environment.loginUrl;
    public homeUrl="/"
}