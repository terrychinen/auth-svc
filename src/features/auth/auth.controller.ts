import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from './dtos/sign-up.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private _authService: AuthService) {}

  @Post('sign-in')
  signIn(@Body() body: any) {}

  @Post('sign-up')
  signUp(@Body() body: SignUpDto) {
    return this._authService.signUp(body);
  }
}
