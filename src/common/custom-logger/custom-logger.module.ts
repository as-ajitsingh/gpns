import { Module } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { LoggerModule } from 'nestjs-pino';

@Module({
    imports: [
        LoggerModule.forRoot({
            pinoHttp: {
                transport: {
                    target: 'pino-pretty', options: {
                        colorize: true,
                        translateTime: 'SYS:standard',
                        ignore: 'pid,hostname',
                    },
                },
                customProps: (req) => {
                    return {
                        correlationId: req.headers['x-correlation-id'] || randomUUID(),
                    };
                },
            },
        }),]
})
export class CustomLoggerModule { }
