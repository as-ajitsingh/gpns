import { Injectable, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PayrollEntry } from './payroll-entry.entity';
import { Repository } from 'typeorm';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { AdminService } from '../admin/admin.service';
import Admin from '../admin/admin.entity';
import { PayrollEntryCreateRequestDto } from './dtos/payroll-entry.create-request.dto';
import { ContractorService } from '../contractor/contractor.service';
import { CurrencyService } from '../currency/currency.service';
import { PayrollEntryUpdateRequestDto } from './dtos/payroll-entry.update-request.dto';

@Injectable()
export class PayrollEntryService {

    constructor(
        @InjectRepository(PayrollEntry) private readonly payrollEntryRepository: Repository<PayrollEntry>,
        private readonly contractorService: ContractorService,
        private readonly adminService: AdminService,
        private readonly currencyService: CurrencyService,
        @InjectPinoLogger(AdminService.name) private readonly logger: PinoLogger
    ) { }

    async getAllPayrollEntries(userId: string, role: 'ADMIN' | 'CONTRACTOR') {
        if (role === 'ADMIN')
            return this.payrollEntryRepository.find();
        else
            return this.payrollEntryRepository.find({ where: { contractor: { id: userId } } });
    }

    async getPayrollEntry(id: PayrollEntry['id'], userId: string, userRole: 'ADMIN' | 'CONTRACTOR') {
        if (userRole === 'ADMIN')
            return this.payrollEntryRepository.findOneBy({ id });
        else
            return this.payrollEntryRepository.findOne({ where: { id, contractor: { id: userId } } });
    }

    async createPayrollEntry(payrollEntryDto: PayrollEntryCreateRequestDto, adminId: Admin['id']) {
        const payrollEntry = new PayrollEntry();
        payrollEntry.startDate = payrollEntryDto.startDate;
        payrollEntry.endDate = payrollEntryDto.endDate;
        payrollEntry.comments = payrollEntryDto.comments;
        payrollEntry.payoutDate = payrollEntryDto.payoutDate;
        payrollEntry.amount = payrollEntryDto.amount;

        payrollEntry.contractor = await this.contractorService.getContractorById(payrollEntryDto.contractorId);
        payrollEntry.addedBy = await this.adminService.getAdminById(adminId);
        payrollEntry.currency = await this.currencyService.getByCode(payrollEntryDto.currencyCode);

        return this.payrollEntryRepository.save(payrollEntry);

    }

    async updatePayrollEntry(id: PayrollEntry['id'], payrollEntryUpdateDto: PayrollEntryUpdateRequestDto) {
        const payrollEntry = await this.payrollEntryRepository.findOneBy({ id });
        if (!payrollEntry) throw new Error('payroll entry not found for id: ' + id);

        if (payrollEntryUpdateDto.startDate) payrollEntry.startDate = payrollEntryUpdateDto.startDate;
        if (payrollEntryUpdateDto.endDate) payrollEntry.endDate = payrollEntryUpdateDto.endDate;
        if (payrollEntryUpdateDto.comments) payrollEntry.comments = payrollEntryUpdateDto.comments;
        if (payrollEntryUpdateDto.payoutDate) payrollEntry.payoutDate = payrollEntryUpdateDto.payoutDate;
        if (payrollEntryUpdateDto.amount) payrollEntry.amount = payrollEntryUpdateDto.amount;

        if (payrollEntryUpdateDto.contractorId)
            payrollEntry.contractor = await this.contractorService.getContractorById(payrollEntryUpdateDto.contractorId);
        if (payrollEntryUpdateDto.currencyCode)
            payrollEntry.currency = await this.currencyService.getByCode(payrollEntryUpdateDto.currencyCode);

        return this.payrollEntryRepository.save(payrollEntry);
    }


    async deletePayrollEntry(id: PayrollEntry['id']) {
        return this.payrollEntryRepository.delete({ id });
    }
}
