import { Body, Controller, Post } from '@nestjs/common';
import { ServicesService } from './services.service';
import { Services } from './dto/services.dto';

@Controller('service')
export class ServicesController {
  constructor(private serviceService: ServicesService) {}

  @Post()
  async addservice(@Body() service: Services) {
    console.log(service);
    return await this.serviceService.addService(service);
  }
}
