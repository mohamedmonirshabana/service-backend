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
import { AuthService } from './auth.service';
import { AccountDto } from './dto/account.dto';
import { AccountLoginDto } from './dto/accountlogin.dto';
import { AccountAdd } from './dto/accountAdd.Dto';
import {
  ApiTags,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
  ApiHeaders,
  ApiHeader,
} from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authDB: AuthService) {}

  @Post('signin')
  @ApiResponse({
    status: 201,
    description: 'Login for user',
    type: AuthService,
  })
  @ApiBody({ type: AccountLoginDto })
  async signin(@Body() accountlogin: AccountLoginDto) {
    return await this.authDB.login(accountlogin);
  }

  @Post('signup')
  @ApiResponse({
    status: 201,
    description: 'Register Account for user',
    type: AuthService,
  })
  @ApiBody({ type: AccountDto })
  async signup(@Body() account: AccountDto) {
    return await this.authDB.register(account);
  }
}

//Login
//Register
