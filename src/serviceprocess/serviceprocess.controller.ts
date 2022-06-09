import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ServiceProcessService } from './serviceprocess.service';
import { ServiceProcessDto } from './dto/serviceprocess.dto';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { AdminGuard } from '../guards/admin.guard';
import { UserGuard } from '../guards/user.guard';
import { ProviderGuard } from '../guards/provider.guard';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddCommentandRateDto } from './dto/addcomment.dto';
@Controller('serviceprocess')
@UseGuards(AuthenticationGuard)
@ApiTags('service process')
@ApiBearerAuth('access-token')
export class ServiceProcessController {
  constructor(private serviceProcess: ServiceProcessService) {}

  @Get('user/:id')
  @UseGuards(UserGuard)
  async getprocessData(@Param('id') id: string) {
    return await this.serviceProcess.getProcessForUser(id);
  }

  @Get('process/:id')
  async getProcessbyID(@Param('id') id: string) {
    return await this.serviceProcess.getprocessById(id);
  }

  @Get('provider/:id')
  async getprocessDataForProvider(@Param('id') id: string) {
    return await this.serviceProcess.getProcessForProvider(id);
  }

  @Post('addrate/:id')
  async addrateandComment(
    @Param('id') id: string,
    @Body() addcommentandrate: AddCommentandRateDto,
  ) {
    await this.serviceProcess.addComment(addcommentandrate, id);
  }

  @Post('payment/:id')
  async addpayment(@Param('id') id: string) {
    await this.serviceProcess.payment(id);
  }

  @Post('arraive/:id')
  async addarive(@Param('id') id: string) {
    await this.serviceProcess.arrivestate(id);
  }

  @Post('finish/:id')
  async finsh(@Param('id') id: string) {
    await this.serviceProcess.finishstate(id);
  }

  @Get('userhistory/:id')
  async userHistory(@Param('id') id: string) {
    return this.serviceProcess.getHistoryforuser(id);
  }
}
