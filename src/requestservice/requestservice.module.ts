import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { requestServiceSchema } from './schema/requestservice.schema';
import { REQUEST_SERVICE } from '../common/constrain';
import { ServiceProviderModule } from '../serviceprovider/serviceprovider.module';
import { RequestServiceController } from './requestservice.controller';
import { RequestServiceService } from './requestservice.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: REQUEST_SERVICE, schema: requestServiceSchema },
    ]),
    ServiceProviderModule,
  ],
  controllers: [RequestServiceController],
  providers: [RequestServiceService],
  exports: [],
})
export class requestServiceModule {}
