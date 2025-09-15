import { Module } from '@nestjs/common';

import { EnvsModule } from './configs/envs/envs.module';
import { DatabaseModule } from './configs/database/database.module';
import { AuthModule } from './features/auth/auth.module';

@Module({
  imports: [EnvsModule, DatabaseModule, AuthModule],
})
export class AppModule {}
