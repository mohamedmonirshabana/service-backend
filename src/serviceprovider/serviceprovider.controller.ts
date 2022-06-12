import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Body,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { ServiceProviderDto } from './dto/serviceprovider.dto';
import { RequestServiceProviderDto } from './dto/requestServiceprovider.dto';
import { ServiceProviderService } from './serviceprovider.service';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { AdminGuard } from 'src/guards/admin.guard';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('serviceprovider')
@UseGuards(AuthenticationGuard)
@ApiBearerAuth('access-token')
@ApiTags('service provider')
export class ServiceProviderController {
  constructor(private serviceProviderService: ServiceProviderService) {}

  @Get()
  @UseGuards(AdminGuard)
  @ApiResponse({
    description: 'Admin Add service',
    status: 201,
  })
  @ApiOkResponse({ description: 'Admin Add new Service' })
  async getAll() {
    return await this.serviceProviderService.getAllProvider();
  }

  @Get('getallprovider/:id')
  @ApiResponse({ description: 'Get All Provider for Service ID' })
  async getAllProviderbyService(@Param('id') serviceId: string) {
    return await this.serviceProviderService.findAllserviceprovider(serviceId);
  }
  @Post('requestprovider')
  @ApiBody({ type: RequestServiceProviderDto })
  @ApiResponse({
    description: 'Request Add it',
    status: 201,
  })
  @ApiOkResponse({ description: 'Your Request is Ok' })
  // @UseGuards(AdminGuard)
  async requestToProvider(
    @Body() requestserviceprov: RequestServiceProviderDto,
  ) {
    const Data = await this.serviceProviderService.requestToServiceprovider(
      requestserviceprov,
    );
    return { result: 'add Request for you ', requestID: Data._id };
  }

  @Get('provideraccept')
  @UseGuards(AdminGuard)
  async getProvideraccept() {
    return await this.serviceProviderService.getAllProvider();
  }

  @Get('allprovider')
  @UseGuards(AdminGuard)
  async getAllProvider() {
    return await this.serviceProviderService.getAll();
  }

  @Get('confirm/:id')
  @UseGuards(AdminGuard)
  async confirmuserRequest(@Param('id') id: string) {
    await this.serviceProviderService.confirmprovider(id);
  }

  @Get('providerrequest')
  async getallproviderRequest() {
    return await this.serviceProviderService.getProviderrequest();
  }

  @Delete(':id')
  async removeRequest(@Param('id') id: string) {
    return await this.serviceProviderService.rejectRequest(id);
  }
}
