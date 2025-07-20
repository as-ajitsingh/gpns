import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/database/base.entity';

@Entity()
export default class Currency extends BaseEntity {
    @Column()
    name: string;

    @Column({ type: 'char', length: 3 })
    code: string;

    @Column({ type: 'char', length: 5 })
    symbol: string;
}