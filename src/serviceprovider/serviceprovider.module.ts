import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceProviderSchema } from './schema/serviceprovider.schema';
import { SERVICE_PROVIDER } from '../common/constrain';
import { ServiceProviderService } from './serviceprovider.service';
import { ServiceProviderController } from './serviceprovider.controller';
import { AccountModule } from '../account/account.Module';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SERVICE_PROVIDER, schema: ServiceProviderSchema },
    ]),
    AccountModule,
  ],
  controllers: [ServiceProviderController],
  providers: [ServiceProviderService],
  exports: [ServiceProviderService],
})
export class ServiceProviderModule {}
