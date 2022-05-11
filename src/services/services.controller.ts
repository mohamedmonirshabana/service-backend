import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { Services } from './dto/services.dto';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { AdminGuard } from '../guards/admin.guard';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('service')
@ApiTags('Service')
@ApiBearerAuth()
export class ServicesController {
  constructor(private serviceService: ServicesService) {}

  @Post()
  @UseGuards(AuthenticationGuard)
  @UseGuards(AdminGuard)
  @ApiResponse({
    description: 'Admin Add service',
    status: 201,
  })
  @ApiOkResponse({ description: 'Admin Add new Service' })
  @ApiUnauthorizedResponse({ description: 'You can not do it ' })
  async addservice(@Body() service: Services) {
    console.log(service);
    return await this.serviceService.addService(service);
  }

  @Put(':id')
  @UseGuards(AuthenticationGuard)
  @UseGuards(AdminGuard)
  @ApiBody({ type: Services })
  async editService(@Param('id') id: string, @Body() service: Services) {
    const result = await this.serviceService.editService(id, service);
    return result;
  }

  @Get('name/:servicename')
  async getServiceByName(@Param('servicename') servicename: string) {
    const data = await this.serviceService.findByServiceName(servicename);
    return data;
  }

  @Get(':id')
  async getServiceId(@Param('id') id: string) {
    const data = await this.serviceService.findByCategoryID(id);
    return data;
  }
}
