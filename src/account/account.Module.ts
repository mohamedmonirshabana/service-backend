import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Account } from './schema/account.schema';
import { USER_TBLE } from '../common/constrain';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: USER_TBLE, schema: Account }])],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [],
})
export class AccountModule {}
