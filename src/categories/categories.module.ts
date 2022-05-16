import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CATEGORY_TBLE } from '../common/constrain';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CategoriesSchema } from './schema/categories.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CATEGORY_TBLE, schema: CategoriesSchema },
    ]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
