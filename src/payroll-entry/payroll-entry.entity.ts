import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from '../common/database/base.entity';
import Contractor from '../contractor/contractor.entity';
import Currency from '../currency/currency.entity';
import Admin from '../admin/admin.entity';

@Entity()
export class PayrollEntry extends BaseEntity {
    @ManyToOne(() => Contractor, { eager: true })
    contractor: Contractor;

    @Column('date')
    startDate: Date;

    @Column('date')
    endDate: Date;

    @Column('date')
    payoutDate: Date;

    @Column('double precision')
    amount: number;

    @ManyToMany(() => Currency)
    currency: Currency;

    @ManyToOne(() => Admin, { eager: true })
    addedBy: Admin;

    @Column('varchar')
    comments: string;
}