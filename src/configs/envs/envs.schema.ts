import { z } from 'zod';

export const envsSchema = z.object({
  NODE_ENV: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number().default(3306),
  DB_NAME: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
});

export type Env = z.infer<typeof envsSchema>;
