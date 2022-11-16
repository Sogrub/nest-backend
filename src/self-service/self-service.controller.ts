import { Controller, Get } from '@nestjs/common';
import { SelfServiceService } from './self-service.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('SelfService')
@Controller('self-service')
export class SelfServiceController {
  constructor(private readonly selfServiceService: SelfServiceService) {}

  @Get()
  getInit() {
    return 'SIUUUUU..';
  }
}
