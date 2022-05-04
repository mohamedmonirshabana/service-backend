import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProviderCaseService } from './providercase.service';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { ProviderGuard } from '../guards/provider.guard';

@Controller('providercase')
@UseGuards(AuthenticationGuard)
@UseGuards(ProviderGuard)
export class ProviderCaseController {
  constructor(private providercase: ProviderCaseService) {}

  @Get(':providerid')
  async getAllinfo(@Param('providerid') providerid: string) {
    return await this.providercase.getallinfo(providerid);
  }

  @Post('/addmoney/:id')
  async addmoneyforprovider(
    @Param('id') id: string,
    @Body('money') money: number,
  ) {
    await this.providercase.addmoney(id, money);
  }

  @Put('/getallmony/:id')
  async getAllMoney(@Param('id') id: string) {
    await this.providercase.getallinfo(id);
  }
}
