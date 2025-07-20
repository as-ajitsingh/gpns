import Admin from '../admin/admin.entity';
import { ormOptions } from '../common/database/orm-options';
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt'
import Country from '../country/country.entity';

const dataSource = new DataSource(ormOptions);

async function seed() {
    await dataSource.initialize();

    //adding admin user
    const adminRepo = dataSource.getRepository(Admin).save({ name: 'Super Admin', paswordHash: await bcrypt.hash('admin$$pass', 10), isActive: true });

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

    await dataSource.destroy();
}

seed()
    .then(_ => console.log('seeding complete'))
    .catch(e => console.error('seeding failed with error:', e));