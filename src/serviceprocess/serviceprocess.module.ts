import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceProcessSchema } from './schema/serviceprocess.schema';
import { SERVICE_PROCESS } from '../../common/constrain';
import { ServiceProcessController } from './serviceprocess.controller';
import { ServiceProcessService } from './serviceprocess.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SERVICE_PROCESS, schema: ServiceProcessSchema },
    ]),
  ],
  controllers: [ServiceProcessController],
  providers: [ServiceProcessService],
  exports: [ServiceProcessService],
})
export class ServiceProcessModule {}
