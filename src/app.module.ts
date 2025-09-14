import { Module } from '@nestjs/common';

import { ConfigsModule } from './configs/envs/envs.module';
import { DatabaseModule } from './configs/database/database.module';
import { AuthModule } from './features/auth/auth.module';

@Module({
  imports: [ConfigsModule, DatabaseModule, AuthModule],
})
export class AppModule {}
