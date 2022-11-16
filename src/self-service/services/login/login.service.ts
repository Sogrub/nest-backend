import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private httpService: HttpService) {}
  async getCrmAccount(token: string, email: string) {
    const configHeaders = {
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
      },
    };
    const accountResponse = await firstValueFrom(
      this.httpService.get(
        `https://www.zohoapis.com/crm/v3/Accounts/search?email=${email}`,
        configHeaders,
      ),
    );
    return accountResponse.data.data[0];
  }

  generatePassword() {
    const randomNum = Math.floor((Math.random() * (10000 - 1000 + 1)) + 1000);
    return `Econt${randomNum}**`
  }
}
