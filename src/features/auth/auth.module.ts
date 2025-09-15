import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtStrategyModule } from '@configs/strategies/jwt-strategy.module';
import { Constants } from '@configs/enums/constants';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from './entities/user.entity';
import { MysqlUserRepository } from './repositories/mysql-user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtStrategyModule],
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
