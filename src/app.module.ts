import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormOptions } from './common/database/orm-options';
import { AdminModule } from './admin/admin.module';
import { ContractorModule } from './contractor/contractor.module';
import { CountryModule } from './country/country.module';
import { CurrencyModule } from './currency/currency.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),
    AdminModule,
    ContractorModule,
    CountryModule,
    CurrencyModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
