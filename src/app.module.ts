import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceService } from './device.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DeviceService],
})
export class AppModule {}
