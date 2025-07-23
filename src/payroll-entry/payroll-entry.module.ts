import { Module } from '@nestjs/common';
import { PayrollEntryController } from './payroll-entry.controller';
import { PayrollEntryService } from './payroll-entry.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayrollEntry } from './payroll-entry.entity';
import { AdminModule } from '../admin/admin.module';
import { ContractorModule } from '../contractor/contractor.module';
import { CurrencyModule } from '../currency/currency.module';

@Module({
  imports: [TypeOrmModule.forFeature([PayrollEntry]), AdminModule, ContractorModule, CurrencyModule],
  controllers: [PayrollEntryController],
  providers: [PayrollEntryService]
})
export class PayrollEntryModule { }
