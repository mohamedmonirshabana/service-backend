import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { USER_TBLE } from '../common/constrain';
import { Account } from './schema/account.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: USER_TBLE, schema: Account }])],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
