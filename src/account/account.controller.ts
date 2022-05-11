import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountDto } from './dto/account.dto';
import { AccountAdd } from './dto/accountAdd.Dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('account')
@ApiTags('Account')
export class AccountController {
  constructor(private account: AccountService) {}
  @Post('signup')
  async signup(@Body() account: AccountDto) {
    return await this.account.register(account);
  }

  @Get(':id')
  async getAccount(@Param('id') id: string) {
    return await this.account.getAccount(id);
  }

  @Patch(':id')
  async changePassword(
    @Param('id') id: string,
    @Body('oldpassword') oldpassword: string,
    @Body('newpass') newpass: string,
  ) {
    const data = await this.account.changePawword(id, oldpassword, newpass);
    return data;
  }
}
