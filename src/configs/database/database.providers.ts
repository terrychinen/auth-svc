import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { Env } from '../envs/envs.schema';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService<Env, true>) => {
      const dataSource = new DataSource({
        type: 'mysql',
        url: configService.get('DB_DATABASE', { infer: true }),
        entities: [__dirname + '/../*.entity'],
        synchronize: configService.get('NODE_ENV') !== 'production',
      });

      return dataSource.initialize();
    },
  },
];
