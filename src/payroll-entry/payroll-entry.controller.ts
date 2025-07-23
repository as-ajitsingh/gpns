import { Body, Controller, Get, Post } from '@nestjs/common';
import { PayrollEntryService } from './payroll-entry.service';
import { PayrollEntryRequestDto } from './payroll-entry.request.dto';

@Controller('payroll-entry')
export class PayrollEntryController {

    constructor(private readonly payrollEntryService: PayrollEntryService) { }

    @Get()
    async getAllPayrollEntries() {
        return this.payrollEntryService.getAllPayrollEntries();
    }

    @Post()
    async createPayrollEntry(@Body() payrollEntryRequestDto: PayrollEntryRequestDto) {
        return this.payrollEntryService.createPayrollEntry(payrollEntryRequestDto, '60f5630e-b0db-473f-86b5-bfbcbd1d6fe7');
    }
}
