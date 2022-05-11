import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RequestServiceService } from './requestservice.service';
import { AddRequest } from './dto/addrequestService';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { AdminGuard } from '../guards/admin.guard';
import { ProviderGuard } from '../guards/provider.guard';
import { UserGuard } from '../guards/user.guard';
import { ServiceProviderService } from '../serviceprovider/serviceprovider.service';
import { request } from 'express';

import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('requestservice')
@UseGuards(AuthenticationGuard)
@ApiTags('request Service')
export class RequestServiceController {
  constructor(
    private requestService: RequestServiceService,
    private serviceprovider: ServiceProviderService,
  ) {}

  @Post()
  @UseGuards(UserGuard)
  async addrequest(@Body() addRequest: AddRequest) {
    await this.requestService.addRequest(
      addRequest.user_Id,
      addRequest.service_provider_Id,
    );
  }

  @Get(':uid')
  @UseGuards(ProviderGuard)
  async getRequestforProvider() {
    const uid = request['user'][1];
    const Data = await this.serviceprovider.getDataByuserID(uid);
    const result = await this.requestService.getRequest_for_provider(Data._id);
    return result;
  }

  @Get('confirm/:id')
  async confirmRequest(@Param('id') id: string) {
    await this.requestService.confirmrequest(id);
  }

  @Delete(':id')
  async deleteRequest(@Param('id') id: string) {
    await this.requestService.removerequest(id);
  }
}
