import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongo_String } from '../common/constrain';
import { AccountModule } from './account/account.Module';
import { CategoriesModule } from './categories/categories.module';
import { ProviderCaseModule } from './providercase/providercase.module';
import { requestServiceModule } from './requestservice/requestservice.module';
import { ServiceProcessModule } from './serviceprocess/serviceprocess.module';
import { ServiceProviderModule } from './serviceprovider/serviceprovider.module';
import { ServicesModule } from './services/services.module';
import { GetUserMiddleware } from './middleware/get-user.middleware';

@Module({
  imports: [
    MongooseModule.forRoot(Mongo_String),
    ServicesModule,
    CategoriesModule,
    AccountModule,
    ServiceProviderModule,
    requestServiceModule,
    ServiceProcessModule,
    ProviderCaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(GetUserMiddleware);
  }
}
