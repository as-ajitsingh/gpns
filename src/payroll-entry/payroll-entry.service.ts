import { Injectable, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PayrollEntry } from './payroll-entry.entity';
import { Repository } from 'typeorm';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { AdminService } from '../admin/admin.service';
import Admin from '../admin/admin.entity';
import { PayrollEntryRequestDto } from './payroll-entry.request.dto';
import Contractor from '../contractor/contractor.entity';
import { ContractorService } from '../contractor/contractor.service';
import { CurrencyService } from '../currency/currency.service';

@Injectable()
export class PayrollEntryService {

    constructor(
        @InjectRepository(PayrollEntry) private readonly payrollEntryRepository: Repository<PayrollEntry>,
        private readonly contractorService: ContractorService,
        private readonly adminService: AdminService,
        private readonly currencyService: CurrencyService,
        @InjectPinoLogger(AdminService.name) private readonly logger: PinoLogger
    ) { }

    async getAllPayrollEntries() {
        return this.payrollEntryRepository.find();
    }

    async getPayrollEntry(id: PayrollEntry['id']) {
        return this.payrollEntryRepository.findOneBy({ id });
    }

    async createPayrollEntry(payrollEntryDto: PayrollEntryRequestDto, adminId: Admin['id']) {
        const payrollEntry = new PayrollEntry();
        payrollEntry.startDate = payrollEntryDto.startDate;
        payrollEntry.endDate = payrollEntryDto.endDate;
        payrollEntry.comments = payrollEntryDto.comments;
        payrollEntry.payoutDate = payrollEntryDto.payoutDate;
        payrollEntry.amount = payrollEntryDto.amount;

        payrollEntry.contractor = await this.contractorService.getContractorById(payrollEntryDto.contractorId);
        payrollEntry.addedBy = await this.adminService.getAdminById(adminId);
        payrollEntry.currency = await this.currencyService.getByCode(payrollEntryDto.currencyCode);

        const result = await this.payrollEntryRepository.save(payrollEntry);
        console.log('>>>', result);
        return result;

    }
}
