import { SelfServiceService } from '@/self-service/self-service.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { firstValueFrom } from 'rxjs';

@Injectable()
export class TicketsMiddleware implements NestMiddleware {
  constructor(private selfServiceService: SelfServiceService) {}

  async use(req: Request, res: Response, next: NextFunction) { 
    const tokenDesk = await firstValueFrom(this.selfServiceService.getAuthenticationDesk());
    req.body.tokenDesk = tokenDesk.data.access_token;
   
    const tokenCrm = await firstValueFrom(this.selfServiceService.getAuthenticationCrm());
    req.body.tokenCrm = tokenCrm.data.access_token;
    next();
  }
}
