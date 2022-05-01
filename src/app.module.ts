import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongo_String } from '../common/constrain';
import { AccountModule } from './account/account.Module';
import { CategoriesModule } from './categories/categories.module';
import { ServiceProviderModule } from './serviceprovider/serviceprovider.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    MongooseModule.forRoot(Mongo_String),
    ServicesModule,
    CategoriesModule,
    AccountModule,
    ServiceProviderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
