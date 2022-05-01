import { Controller, Post, Get, Patch, Param, Body } from '@nestjs/common';
import { ServiceProviderDto } from './dto/serviceprovider.dto';
import { ServiceProviderService } from './serviceprovider.service';

@Controller('serviceprovider')
export class ServiceProviderController {
  constructor(private serviceProviderService: ServiceProviderService) {}

  @Get()
  async getAll() {
    return await this.serviceProviderService.getAllProvider();
  }
  @Get('getallprovider/:id')
  async getAllProviderbyService(@Param('id') serviceId: string) {
    return await this.serviceProviderService.findAllserviceprovider(serviceId);
  }
  @Post('requestprovider/:id')
  async requestToProvider(
    @Param('id') id: string,
    @Body('userid') userid: string,
    @Body('price') price: number,
  ) {
    await this.serviceProviderService.requestToServiceprovider(
      userid,
      id,
      price,
    );
  }

  @Get('allProvider')
  async getAllProvider() {
    return await this.serviceProviderService.getAllProvider();
  }

  @Get('confirm/:id')
  async confirmuserRequest(@Param('id') id: string) {
    await this.serviceProviderService.confirmprovider(id);
  }
}
