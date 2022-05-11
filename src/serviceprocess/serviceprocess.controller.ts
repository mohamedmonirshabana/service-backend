import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ServiceProcessService } from './serviceprocess.service';
import { ServiceProcessDto } from './dto/serviceprocess.dto';

import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('serviceprocess')
@ApiTags('service process')
export class ServiceProcessController {
  constructor(private serviceProcess: ServiceProcessService) {}

  @Get(':id')
  async getprocessData(@Param('id') id: string) {
    return await this.serviceProcess.getprocessinfo(id);
  }

  @Post(':id')
  async processDone(@Param('id') id: string) {
    await this.serviceProcess.processDone(id);
  }

  @Post('addcoment/:id')
  async addcommentandandRat(
    @Param('id') id: string,
    @Body('comment') comment: string,
    @Body('rate') rate: number,
  ) {
    await this.serviceProcess.addCommentandRate(id, comment, rate);
  }
}
