import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envsSchema } from './envs.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envsSchema.parse(env),
      isGlobal: true,
    }),
  ],
})
export class ConfigsModule {}
