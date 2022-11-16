import { Controller, Get, Request } from '@nestjs/common';
import { TicketsService } from '@self-service/services/tickets/tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketsService: TicketsService) {}

  @Get()
  getInit() {
    return 'Tickets Controller';
  }

  @Get('allTickets')
  async getAllTickets(@Request() req) {
    const token = req.body.tokenDesk;
    const tikets = await this.ticketsService.gelAllTickets(token);    
    return tikets
  }
}
