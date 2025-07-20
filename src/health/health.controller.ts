import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {

    constructor(private readonly healthCheckService: HealthCheckService, private db: TypeOrmHealthIndicator) { }

    @Get()
    async healthCheck() {
        return this.healthCheckService.check([
            () => this.db.pingCheck('database')
        ])
    }
}
