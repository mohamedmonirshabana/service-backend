import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SERVICE_TBLE } from '../common/constrain';
import { ServiceSchema } from './schema/service.schema';
import { ServicesController } from './services.controller';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: SERVICE_TBLE, schema: ServiceSchema }]),
  ],
  controllers: [ServicesController],
  providers: [ServicesService],
  exports: [ServicesService],
})
export class ServicesModule {}
