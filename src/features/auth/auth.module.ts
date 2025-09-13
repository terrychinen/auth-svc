import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './repositories/user.repository';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
  ],
})
export class AuthModule {}
