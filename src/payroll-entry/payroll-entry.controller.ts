import { Body, Controller, Delete, Get, Param, Patch, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { PayrollEntryService } from './payroll-entry.service';
import { PayrollEntryCreateRequestDto } from './dtos/payroll-entry.create-request.dto';
import { AuthGuard } from '../auth/auth.guard';
import { RequestingUser } from '../auth/auth.decorator';
import { PayrollEntryUpdateRequestDto } from './dtos/payroll-entry.update-request.dto';
import { RolesGuard } from '../auth/roles.guard';

@Controller('payroll-entry')
@UseGuards(AuthGuard, RolesGuard)
export class PayrollEntryController {

    constructor(private readonly payrollEntryService: PayrollEntryService) { }

    @Get()
    @Get(':id')
    @SetMetadata('roles', ['ADMIN', 'CONTRACTOR'])
    async getAllPayrollEntries(@RequestingUser() user) {
        return this.payrollEntryService.getAllPayrollEntries(user.id, user.role);
    }

    @Get(':id')
    @SetMetadata('roles', ['ADMIN', 'CONTRACTOR'])
    async getPayrollById(@Param('id') id: string) {
        return this.payrollEntryService.getPayrollEntry(id);
    }

    @Post()
    @SetMetadata('roles', ['ADMIN'])
    async createPayrollEntry(@Body() payrollEntryRequestDto: PayrollEntryCreateRequestDto, @RequestingUser() user) {
        return this.payrollEntryService.createPayrollEntry(payrollEntryRequestDto, user);
    }

    @Patch(':id')
    @SetMetadata('roles', ['ADMIN'])
    async updatePayrollEntry(@Param('id') id: string, @Body() payrollEntryUpdateRequestDto: PayrollEntryUpdateRequestDto) {
        return this.payrollEntryService.updatePayrollEntry(id, payrollEntryUpdateRequestDto);
    }

    @Delete(':id')
    @SetMetadata('roles', ['ADMIN'])
    async deletePayrollEntry(@Param('id') id: string) {
        return this.payrollEntryService.deletePayrollEntry(id);
    }

}
