import {
  Module,
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongo_String } from './common/constrain';
import { AccountModule } from './account/account.Module';
import { CategoriesModule } from './categories/categories.module';
import { ProviderCaseModule } from './providercase/providercase.module';
import { requestServiceModule } from './requestservice/requestservice.module';
import { ServiceProcessModule } from './serviceprocess/serviceprocess.module';
import { ServiceProviderModule } from './serviceprovider/serviceprovider.module';
import { ServicesModule } from './services/services.module';
import { AuthModule } from './auth/auth.module';
import { GetUserMiddleware } from './middleware/get-user.middleware';

import { CategoriesController } from './categories/categories.controller';
import { AccountController } from './account/account.controller';
import { ServicesController } from './services/services.controller';

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
    AuthModule,
    AppModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(GetUserMiddleware).forRoutes(
      AccountController,
      {
        path: 'category',
        method: RequestMethod.POST,
      },
      {
        path: 'service',
        method: RequestMethod.POST,
      },
      {
        path: 'service/:id',
        method: RequestMethod.PUT,
      },
      {
        path: 'service/:id',
        method: RequestMethod.GET,
      },
      {
        path: 'service/name/servicename',
        method: RequestMethod.GET,
      },
    );
  }
}
