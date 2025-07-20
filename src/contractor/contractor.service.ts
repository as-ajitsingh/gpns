import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { Repository } from 'typeorm';
import Contractor from './contractor.entity';


@Injectable()
export class ContractorService {
    constructor(@InjectRepository(Contractor) private readonly contractorRepository: Repository<Contractor>) { }

    async getContractor(username: string, password: string) {
        const contractor = await this.contractorRepository.findOneBy({ username });

        if (!contractor) throw new Error('contractor not found');

        if (!await compare(password, contractor.passwordHash)) throw new Error('unauthorized');

        return contractor;

    }
}
