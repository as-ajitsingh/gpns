import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../common/database/base.entity';
import Country from '../country/country.entity';
import { Exclude } from 'class-transformer';

@Entity()
export default class Contractor extends BaseEntity {
    @Column()
    username: string;

    @Column()
    address: string;

    @Column()
    @Exclude()
    passwordHash: string;

    @Column()
    startDate: Date;

    @Column('date')
    endDate: Date;

    @Column({ type: 'enum', enum: ['permanent', 'contract'], default: 'contract' })
    contractType: string;

    @ManyToOne(() => Country, { eager: true })
    country: Country;
}