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
// @ApiBearerAuth('access-token')
// @UseGuards(AuthenticationGuard)
export class ServicesController {
  constructor(private serviceService: ServicesService) {}

  @Post()
  @UseGuards(AuthenticationGuard)
  @UseGuards(AdminGuard)
  @ApiBearerAuth('access-token')
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
  @ApiBearerAuth('access-token')
  @ApiBody({ type: Services })
  async editService(@Param('id') id: string, @Body() service: Services) {
    const result = await this.serviceService.editService(id, service);
    return result;
  }

  @Get('name/:servicename')
  @ApiBearerAuth('access-token')
  async getServiceByName(@Param('servicename') servicename: string) {
    const data = await this.serviceService.findByServiceName(servicename);
    return data;
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  async getServiceId(@Param('id') id: string) {
    const data = await this.serviceService.findByID(id);
    return data;
  }

  @Get('category/:id')
  async getbycategoryID(@Param('id') id: string) {
    return await this.serviceService.findByCategoryID(id);
  }
}
