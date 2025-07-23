import { PartialType } from '@nestjs/mapped-types';
import { PayrollEntryCreateRequestDto } from './payroll-entry.create-request.dto';

export class PayrollEntryUpdateRequestDto extends PartialType(PayrollEntryCreateRequestDto) { }
