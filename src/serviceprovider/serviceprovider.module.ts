import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceProviderSchema } from './schema/serviceprovider.schema';
import { SERVICE_PROVIDER } from '../../common/constrain';
import { ServiceProviderService } from './serviceprovider.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SERVICE_PROVIDER, schema: ServiceProviderSchema },
    ]),
  ],
  controllers: [],
  providers: [ServiceProviderService],
  exports: [],
})
export class ServiceProviderModule {}
