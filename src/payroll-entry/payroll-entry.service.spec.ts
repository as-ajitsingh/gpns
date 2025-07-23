import { Test, TestingModule } from '@nestjs/testing';
import { PayrollEntryService } from './payroll-entry.service';

describe('PayrollEntryService', () => {
  let service: PayrollEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayrollEntryService],
    }).compile();

    service = module.get<PayrollEntryService>(PayrollEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
