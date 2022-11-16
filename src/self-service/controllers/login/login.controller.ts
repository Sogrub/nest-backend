import { UserFirebaseModel } from '@/self-service/models/selfService.models';
import { LoginService } from '@/self-service/services/login/login.service';
import { FirebaseService } from '@/shared/services/firebase.service';
import { Controller, Get, Query, Request } from '@nestjs/common';

@Controller('login')
export class LoginController {
  constructor(
    private loginService: LoginService,
    private firebaseService: FirebaseService,
  ) {}
  @Get()
  async getInit(@Request() req, @Query('email') email: string) {
    const token = req.body.tokenCrm;
    const userCredentials: UserFirebaseModel =
      await this.firebaseService.getOne(email);
    if (userCredentials) {
      return userCredentials;
    } else {
      const accountCRM = await this.loginService.getCrmAccount(token, email);
      console.log(accountCRM.id);      
      if (accountCRM) {
        const userData = {
          email: accountCRM.Correo_electr_nico1,
          password: this.loginService.generatePassword(),
          accounName: accountCRM.Account_Name,
          idCrm: accountCRM.id,
          customer_type: accountCRM.Naturaleza_Juridica
        }
        await this.firebaseService.createOne(userData);
        return userData;
      } else {
        return { message: 'Este cliente no existe en ZOHO' };
      }
    }
  }
}
