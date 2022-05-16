import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { requestServiceSchema } from './schema/requestservice.schema';
import { REQUEST_SERVICE } from '../common/constrain';
import { ServiceProviderModule } from '../serviceprovider/serviceprovider.module';
import { RequestServiceController } from './requestservice.controller';
import { RequestServiceService } from './requestservice.service';
import { ServicesModule } from '../services//services.module';
import { CategoriesModule } from '../categories/categories.module';
import { AccountModule } from '../account/account.Module';
import { AppInfoModule } from '../appinfo/appinfo.module';
import { ServiceProcessModule } from '../serviceprocess/serviceprocess.module';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: REQUEST_SERVICE, schema: requestServiceSchema },
    ]),
    ServiceProviderModule,
    AccountModule,
    ServicesModule,
    CategoriesModule,
    AppInfoModule,
    ServiceProcessModule,
  ],
  controllers: [RequestServiceController],
  providers: [RequestServiceService],
  exports: [],
})
export class requestServiceModule {}
