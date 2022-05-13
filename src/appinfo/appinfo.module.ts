import { Module } from '@nestjs/common';
import { AppInfoService } from './appinfo.service';
import { AppInfoController } from './appinfo.controller';
import { appinfoschema } from './schema/appinfo.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_INFO } from '../common/constrain';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: APP_INFO, schema: appinfoschema }]),
  ],
  controllers: [AppInfoController],
  providers: [AppInfoService],
  exports: [],
})
export class AppInfoModule {}
