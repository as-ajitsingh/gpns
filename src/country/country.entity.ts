import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../common/database/base.entity';

@Entity()
export default class Country extends BaseEntity {
    @Column()
    name: string;

    @Column({ type: 'char', length: 2 })
    code: string;
}