import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongo_String } from '../common/constrain';
import { AccountModule } from './account/account.Module';
import { CategoriesModule } from './categories/categories.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    MongooseModule.forRoot(Mongo_String),
    ServicesModule,
    CategoriesModule,
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
