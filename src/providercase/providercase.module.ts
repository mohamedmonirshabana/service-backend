import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PROVIDER_CASE } from '../../common/constrain';
import { ProviderCaseController } from './providercase.controller';
import { ProviderCaseService } from './providercase.service';
import { providercaseSchema } from './schema/provercase.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PROVIDER_CASE, schema: providercaseSchema },
    ]),
  ],
  controllers: [ProviderCaseController],
  providers: [ProviderCaseService],
  exports: [],
})
export class ProviderCaseModule {}
