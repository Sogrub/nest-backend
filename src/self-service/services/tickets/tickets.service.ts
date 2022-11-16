import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ZohoAuthentication } from "@self-service/models/tickets/tikets.models";
import { firstValueFrom, Observable } from 'rxjs';

@Injectable()
export class TicketsService {

  constructor(private httpService: HttpService) { }

  /**
   * Funcion para obtener el id de contacto desde los contactos de ZohoCRM mediante un filtro por Email
   * @param token
   * @param email 
   * @returns contactidResponse
   */
  async getCrmIdContact(token: string, email: string) {
    const configHeaders = {
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
      },
    };

    const contactidResponse = await firstValueFrom(this.httpService.get(`https://www.zohoapis.com/crm/v3/Contacts/search?email=${email}`, configHeaders));
    return contactidResponse
  }

  async getDeskIdContact(token: string, id: string) {
    const configHeaders = {
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
      },
    };

    const contactidResponse = await firstValueFrom(this.httpService.get(`https://www.zohoapis.com/crm/v3/Contacts/${id}/Zoho_Support`, configHeaders));
    return contactidResponse
  }

  async gelAllTickets(token: string) {
    const configHeaders = {
      headers: {
        orgId: '702112150',
        Authorization: `Zoho-oauthtoken ${token}`,
      },
    }
    const allTicketsResponse = await firstValueFrom(this.httpService.get('https://desk.zoho.com/api/v1/tickets', configHeaders));    
    return allTicketsResponse.data
  }

}
