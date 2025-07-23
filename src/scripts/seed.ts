import Admin from '../admin/admin.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as bcrypt from 'bcrypt'
import Country from '../country/country.entity';
import Currency from '../currency/currency.entity';
import Contractor from '../contractor/contractor.entity';
import { ormOptions } from '../../ormconfig';

const dataSource = new DataSource({
    ...ormOptions as DataSourceOptions,
    entities: ['./src/**/*.entity.ts'],
    migrations: ['./src/migrations/*.ts']
});

async function seed() {
    await dataSource.initialize();
    console.log(dataSource.entityMetadatas.map(e => e.name));

    //adding admin user
    await dataSource.getRepository(Admin).save({ username: 'Super Admin', paswordHash: await bcrypt.hash('admin$$pass', 10), isActive: true });

    // seeding countries
    const countries = [
        { name: 'United States', code: 'US' },
        { name: 'India', code: 'IN' },
        { name: 'United Kingdom', code: 'UK' },
        { name: 'Canada', code: 'CA' },
        { name: 'Germany', code: 'DE' },
        { name: 'France', code: 'FR' },
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'South Africa', code: 'ZA' },
        { name: 'Japan', code: 'JP' },
        { name: 'China', code: 'CN' },
        { name: 'Russia', code: 'RU' },
        { name: 'Mexico', code: 'MX' },
        { name: 'Italy', code: 'IT' },
        { name: 'Spain', code: 'ES' },
        { name: 'Netherlands', code: 'NL' },
        { name: 'Sweden', code: 'SE' },
        { name: 'Norway', code: 'NO' },
        { name: 'Denmark', code: 'DK' },
        { name: 'Switzerland', code: 'CH' },
        { name: 'Finland', code: 'FI' },
        { name: 'Belgium', code: 'BE' },
        { name: 'Ireland', code: 'IE' },
        { name: 'Portugal', code: 'PT' },
        { name: 'Poland', code: 'PL' },
        { name: 'Austria', code: 'AT' },
        { name: 'New Zealand', code: 'NZ' },
        { name: 'Singapore', code: 'SG' },
        { name: 'South Korea', code: 'KR' },
        { name: 'Indonesia', code: 'ID' },
        { name: 'Argentina', code: 'AR' },
        { name: 'Chile', code: 'CL' },
        { name: 'Colombia', code: 'CO' },
        { name: 'Philippines', code: 'PH' },
        { name: 'Malaysia', code: 'MY' },
        { name: 'Thailand', code: 'TH' },
        { name: 'Vietnam', code: 'VN' },
        { name: 'Saudi Arabia', code: 'SA' },
        { name: 'UAE', code: 'AE' },
        { name: 'Turkey', code: 'TR' },
        { name: 'Czech Republic', code: 'CZ' },
        { name: 'Hungary', code: 'HU' },
        { name: 'Romania', code: 'RO' },
        { name: 'Israel', code: 'IL' },
        { name: 'Greece', code: 'GR' },
        { name: 'Ukraine', code: 'UA' },
        { name: 'Nigeria', code: 'NG' },
        { name: 'Kenya', code: 'KE' },
        { name: 'Egypt', code: 'EG' },
    ];
    await dataSource.getRepository(Country).save(countries);

    //seeding currencies
    const currencies = [
        { code: 'USD', name: 'United States Dollar', symbol: '$' },
        { code: 'EUR', name: 'Euro', symbol: '€' },
        { code: 'GBP', name: 'British Pound Sterling', symbol: '£' },
        { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
        { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
        { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
        { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
        { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
        { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
        { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' },
        { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' },
        { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
        { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$' },
        { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr' },
        { code: 'KRW', name: 'South Korean Won', symbol: '₩' },
        { code: 'TRY', name: 'Turkish Lira', symbol: '₺' },
        { code: 'RUB', name: 'Russian Ruble', symbol: '₽' },
        { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
        { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
        { code: 'MXN', name: 'Mexican Peso', symbol: '$' },
        { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp' },
        { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM' },
        { code: 'PHP', name: 'Philippine Peso', symbol: '₱' },
        { code: 'THB', name: 'Thai Baht', symbol: '฿' },
        { code: 'VND', name: 'Vietnamese Dong', symbol: '₫' },
        { code: 'EGP', name: 'Egyptian Pound', symbol: '£' },
        { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼' },
        { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
        { code: 'PLN', name: 'Polish Zloty', symbol: 'zł' },
        { code: 'DKK', name: 'Danish Krone', symbol: 'kr' },
        { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft' },
        { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč' },
        { code: 'ILS', name: 'Israeli New Shekel', symbol: '₪' },
        { code: 'CLP', name: 'Chilean Peso', symbol: '$' },
        { code: 'COP', name: 'Colombian Peso', symbol: '$' },
        { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨' },
        { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳' },
        { code: 'LKR', name: 'Sri Lankan Rupee', symbol: 'Rs' },
        { code: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
        { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh' },
        { code: 'GHS', name: 'Ghanaian Cedi', symbol: '₵' },
        { code: 'TZS', name: 'Tanzanian Shilling', symbol: 'TSh' },
        { code: 'UAH', name: 'Ukrainian Hryvnia', symbol: '₴' },
        { code: 'QAR', name: 'Qatari Riyal', symbol: '﷼' },
        { code: 'OMR', name: 'Omani Rial', symbol: '﷼' },
        { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'د.ك' },
        { code: 'BHD', name: 'Bahraini Dinar', symbol: 'ب.د' },
        { code: 'JOD', name: 'Jordanian Dinar', symbol: 'د.ا' },
    ];
    await dataSource.getRepository(Currency).save(currencies);

    //adding contractors
    await dataSource.getRepository(Contractor).save({
        username: 'Bob kumar',
        passwordHash: await bcrypt.hash('pass$$word', 10),
        address: "somewhere in california",
        startDate: new Date('2025-07-01'),
        endDate: new Date('2025-12-31'),
        contractType: 'permanent',
        country: await dataSource.getRepository(Country).findOneByOrFail({ code: 'US' })
    });

    await dataSource.getRepository(Contractor).save({
        username: 'Kumari alice',
        passwordHash: await bcrypt.hash('pass@@word', 10),
        address: "somewhere in london",
        startDate: new Date('2025-06-01'),
        endDate: new Date('2025-10-31'),
        contractType: 'contract',
        country: await dataSource.getRepository(Country).findOneByOrFail({ code: 'UK' })
    });


    await dataSource.destroy();
}

seed()
    .then(_ => console.log('seeding complete'))
    .catch(e => console.error('seeding failed with error:', e));