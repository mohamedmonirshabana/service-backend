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

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('providercase')
@UseGuards(AuthenticationGuard)
@UseGuards(ProviderGuard)
@ApiTags('provider Case')
@ApiBearerAuth('access-token')
export class ProviderCaseController {
  constructor(private providercase: ProviderCaseService) {}

  @Get(':providerid')
  async getAllinfo(@Param('providerid') providerid: string) {
    return await this.providercase.getallinfo(providerid);
  }

  @Put('/getallmony/:id')
  async getAllMoney(@Param('id') id: string) {
    await this.providercase.getallMoney(id);
  }
}
