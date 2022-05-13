import { Injectable } from '@nestjs/common';
import { CATEGORY_TBLE } from '../common/constrain';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CategoriesDto } from './dto/categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(CATEGORY_TBLE) private categoryDB: Model<CategoriesDto>,
  ) {}
  async findAll() {
    return await this.categoryDB.find();
  }

  async addCategory(category: CategoriesDto) {
    const categoryData = new this.categoryDB(category);
    return await categoryData.save();
  }
  async updateCategory(id: string, change: CategoriesDto) {
    const categoryData = await this.categoryDB.findOneAndUpdate(
      { _id: id },
      change,
      { new: true },
    );
    return categoryData;
  }
}
