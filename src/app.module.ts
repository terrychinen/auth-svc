import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './configs/envs/envs.module';
import { DatabaseModule } from './configs/database/database.module';

@Module({
  imports: [ConfigsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
