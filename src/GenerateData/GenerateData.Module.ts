import { Module } from '@nestjs/common';
import { GenerateDataService } from './GenerateData.service';
import { GenerateDataController } from './GenerateData.controller';
import {
  USER_TBLE,
  CATEGORY_TBLE,
  SERVICE_TBLE,
  APP_INFO,
  SERVICE_PROVIDER,
} from '../common/constrain';
import { Account } from './schema/account.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesSchema } from './schema/categories.schema';
import { ServiceSchema } from './schema/service.schema';
import { appinfoschema } from './schema/appinfo.schema';
import { ServiceProviderSchema } from './schema/serviceprovider.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: USER_TBLE, schema: Account }]),
    MongooseModule.forFeature([
      { name: CATEGORY_TBLE, schema: CategoriesSchema },
    ]),
    MongooseModule.forFeature([{ name: SERVICE_TBLE, schema: ServiceSchema }]),
    MongooseModule.forFeature([{ name: APP_INFO, schema: appinfoschema }]),
    MongooseModule.forFeature([
      { name: SERVICE_PROVIDER, schema: ServiceProviderSchema },
    ]),
  ],
  controllers: [GenerateDataController],
  providers: [GenerateDataService],
})
export class GenerateDataModule {}
