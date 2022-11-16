import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ZohoAuthentication } from './models/tickets/tikets.models';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SelfServiceService {
    constructor(private httpService: HttpService) { }
    /**
   * Funcion para obtener el token de autorizacion de las funciones del api de ZohoDesk
   * @returns Observable<ZohoAuthentication>
   */
  getAuthenticationDesk(): Observable<ZohoAuthentication> {
    const configParams = {
      params: {
        refresh_token:
          '1000.2c4981b7049ac19a75c20c68a90b89bf.61aa665bd1c1e4a8e4460c859cf3cbe3',
        client_id: '1000.U6OSWPJCQI8DETIAE63MD8ARYG7LNH',
        client_secret: '07bf731214b27dd07604231e6cef1b35d35221aa53',
        grant_type: 'refresh_token',
      },
    };
    const AuthenticationResponse = this.httpService.post('https://accounts.zoho.com/oauth/v2/token', {}, configParams);
    return AuthenticationResponse
  }

  /**
   * Funcion para obtener el token de autorizacion de las funciones del api de ZohoCRM
   * @returns Observable<ZohoAuthentication>
   */
  getAuthenticationCrm(): Observable<ZohoAuthentication> {
    const configParams = {
      params: {
        refresh_token:
          '1000.c821e7bf859bd9919db85461a9afff56.1ef200770fc3b60550a6fe5950a99a8e',
        client_id: '1000.U6OSWPJCQI8DETIAE63MD8ARYG7LNH',
        client_secret: '07bf731214b27dd07604231e6cef1b35d35221aa53',
        grant_type: 'refresh_token',
      },
    };
    const AuthenticationResponse = this.httpService.post('https://accounts.zoho.com/oauth/v2/token', {}, configParams);
    return AuthenticationResponse
  }
}
