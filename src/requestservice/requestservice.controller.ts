import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RequestServiceService } from './requestservice.service';
import { AddRequest } from './dto/addrequestService';

@Controller('requestservice')
export class RequestServiceController {
  constructor(private requestService: RequestServiceService) {}

  @Post()
  async addrequest(@Body() addRequest: AddRequest) {
    await this.requestService.addRequest(
      addRequest.user_Id,
      addRequest.service_provider_Id,
    );
  }

  @Get(':uid')
  async getRequestforProvider(@Param('uid') uid: string) {
    await this.requestService.getRequest_for_provider(uid);
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
