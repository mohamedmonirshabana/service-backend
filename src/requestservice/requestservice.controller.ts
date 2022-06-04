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

import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('requestservice')
@UseGuards(AuthenticationGuard)
@ApiTags('request Service')
@ApiBearerAuth('access-token')
export class RequestServiceController {
  constructor(
    private requestService: RequestServiceService,
    private serviceprovider: ServiceProviderService,
  ) {}

  @Post()
  // @UseGuards(UserGuard)
  @ApiBody({ type: AddRequest })
  @ApiResponse({
    description: 'Add request provider',
    status: 201,
  })
  @ApiOkResponse({ description: 'user Request Service' })
  async addrequest(@Body() addRequest: AddRequest) {
    console.log(addRequest);
    await this.requestService.addRequest(
      addRequest.user_Id,
      addRequest.service_provider_Id,
    );
  }

  @Get(':uid')
  @UseGuards(ProviderGuard)
  async getRequestforProvider(@Param('uid') uid: string) {
    // const Data = await this.serviceprovider.getDataByuserID(uid);
    // console.log('uid ' + uid);
    const result = await this.requestService.getRequest_for_provider(uid);
    return result;
  }

  @Get('confirm/:id')
  @UseGuards(ProviderGuard)
  async confirmRequest(@Param('id') id: string) {
    // console.log(id);
    await this.requestService.confirmrequest(id);
    return { message: 'Confir Request' };
  }

  @Get('activerequest/:id')
  @UseGuards(ProviderGuard)
  async getActiverequest(@Param('id') id: string) {
    return await this.requestService.getRequest_active(id);
  }

  @Delete(':id')
  async deleteRequest(@Param('id') id: string) {
    await this.requestService.removerequest(id);
  }
}
