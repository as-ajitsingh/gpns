import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { ContractorModule } from './contractor/contractor.module';
import { CountryModule } from './country/country.module';
import { CurrencyModule } from './currency/currency.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './common/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './common/config/configuration';
import { HealthModule } from './health/health.module';
import { CustomLoggerModule } from './common/custom-logger/custom-logger.module';
import { PayrollEntryModule } from './payroll-entry/payroll-entry.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => validateEnv()]
    }),
    CustomLoggerModule,
    AdminModule,
    ContractorModule,
    CountryModule,
    CurrencyModule,
    AuthModule,
    DatabaseModule,
    HealthModule,
    PayrollEntryModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
