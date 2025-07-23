import { Test, TestingModule } from '@nestjs/testing';
import { PayrollEntryController } from './payroll-entry.controller';

describe('PayrollEntryController', () => {
  let controller: PayrollEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayrollEntryController],
    }).compile();

    controller = module.get<PayrollEntryController>(PayrollEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
