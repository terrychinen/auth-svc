import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Constants } from 'src/configs/enums/constants';
import { MysqlUserRepository } from './repositories/mysql-user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: Constants.USER_REPOSITORY,
      useClass: MysqlUserRepository,
    },
  ],
})
export class AuthModule {}
