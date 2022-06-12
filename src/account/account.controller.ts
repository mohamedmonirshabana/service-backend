import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountDto } from './dto/account.dto';
import { AccountLoginDto } from './dto/accountlogin.dto';
import { AccountAdd } from './dto/accountAdd.Dto';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { UserGuard } from '../guards/user.guard';
import { ProfileDto } from './dto/profile.dto';
import { PasswordDto } from './dto/password.dto';
import { UpdateAccountDto } from './dto/updateAccount.Dto';
import { RoleDto } from './dto/chrole.dto';
import { ApiTags, ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { AdminGuard } from '../guards/admin.guard';

@Controller('account')
@UseGuards(AuthenticationGuard)
@ApiTags('Account')
@ApiBearerAuth('access-token')
export class AccountController {
  constructor(private account: AccountService) {}

  @Get(':id')
  async getAccount(@Param('id') id: string) {
    const Data = Headers[0];
    console.log(Data);
    return await this.account.getAccount(id);
  }

  @Patch('update/:id')
  @ApiBody({ type: UpdateAccountDto })
  async updateAccount(
    @Param('id') id: string,
    @Body() Account: UpdateAccountDto,
  ) {
    const data = await this.account.updateAccount(id, Account);
    return data;
  }

  @Patch('changepassword/:id')
  @ApiBody({ type: PasswordDto })
  async updatePassword(@Param('id') id: string, @Body() pass: PasswordDto) {
    return await this.account.changePawword(id, pass);
  }

  @Get('')
  @UseGuards(AdminGuard)
  async getAllAccounts() {
    // return { kk: 'medo' };
    return await this.account.getAllusers();
  }

  @Get('role/:role')
  @UseGuards(AdminGuard)
  async getAllUsers(@Param('role') role: string) {
    return await this.account.getAll_User(role);
  }

  @Patch('chrole/:id')
  @ApiBody({ type: RoleDto })
  @ApiBody({ type: RoleDto })
  async upRole(@Param('id') id: string, @Body() role: RoleDto) {
    return await this.account.chrole(id, role);
  }

  @Get('getalluseres/:role')
  @UseGuards(AdminGuard)
  async moroinfo(@Param('role') role: string) {
    return await this.account.getAlluserforAdmin(role);
  }

  // @Get('/propdp/')
  // // @UseGuards(AdminGuard)
  // async GetAllProvideres() {
  //   return await this.account.x2();
  // }
}
