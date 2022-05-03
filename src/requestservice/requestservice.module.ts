import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { requestServiceSchema } from './schema/requestservice.schema';
import { REQUEST_SERVICE } from '../../common/constrain';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: REQUEST_SERVICE, schema: requestServiceSchema },
    ]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class requestServiceModule {}
