import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from './dtos/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('sign-in')
  signIn(@Body() body: any) {}

  @Post('sign-up')
  signUp(@Body() body: SignUpDto) {}
}
