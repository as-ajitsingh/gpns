import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractorService } from './contractor.service';
import Contractor from './contractor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contractor])],
  providers: [ContractorService],
  exports: [ContractorService]
})
export class ContractorModule { }
