import { Get, Controller } from '@nestjs/common';

import { GenerateDataService } from './GenerateData.service';

@Controller('gendata')
export class GenerateDataController {
  constructor(private data: GenerateDataService) {}
  @Get('basedata')
  async generate() {
    await this.data.CreateData();
  }
  @Get('genserv')
  async genserv() {
    await this.data.genservice();
  }

  @Get('appinfo')
  async geninfo() {
    await this.data.genin();
  }

  @Get('proserv')
  async prov() {
    await this.data.provSer();
  }
}
