import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Currency from './currency.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CurrencyService {

    constructor(@InjectRepository(Currency) private readonly currencyRepository: Repository<Currency>) { }

    async getByCode(code: Currency['code']) {
        const currency = await this.currencyRepository.findOneBy({ code });

        if (!currency) throw new Error('currency not found for code: ' + code);

        return currency;
    }
}
