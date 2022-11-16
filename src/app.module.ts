import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SelfServiceModule } from './self-service/self-service.module';

@Module({
  imports: [SelfServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
