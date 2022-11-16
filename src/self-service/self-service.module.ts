import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
//* modules
import { HttpModule } from '@nestjs/axios';

//* services
import { SelfServiceService } from './self-service.service';
import { TicketsService } from './services/tickets/tickets.service';
import { FirebaseService } from '@shared/services/firebase.service';

//* controllers
import { SelfServiceController } from './self-service.controller';
import { TicketsController } from './controllers/tickets/tickets.controller';

//* middlewares
import { TicketsMiddleware } from "@self-service/middlewares/tickets/tickets.middleware";
import { LoginController } from './controllers/login/login.controller';
import { LoginService } from './services/login/login.service';


@Module({
  imports: [HttpModule],
  controllers: [SelfServiceController, TicketsController, LoginController],
  providers: [SelfServiceService, TicketsService, LoginService, FirebaseService],
})
export class SelfServiceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TicketsMiddleware)
      .forRoutes('tickets', 'login');
  }
}
