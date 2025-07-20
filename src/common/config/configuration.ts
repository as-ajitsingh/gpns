import { ConfigService } from '@nestjs/config';
import { z } from 'zod';

export const ConfigSchema = z.object({
    DB_HOST: z.string(),
    DB_PORT: z.coerce.number().min(1).max(65535),
    DB_USERNAME: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string().optional(),
    JWT_SECRET: z.string(),
    JWT_EXPIRY: z.string(),
});

export type ConfigType = z.infer<typeof ConfigSchema>;
export class CustomConfigService extends ConfigService<ConfigType> { }

export function validateEnv() {
    const parsed = ConfigSchema.safeParse(process.env);
    if (!parsed.success) {
        console.error('❌ Invalid environment variables:', parsed.error.format());
        process.exit(1);
    }

    return parsed.data;
}