import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/database/base.entity';

@Entity()
export default class Admin extends BaseEntity {
    @Column()
    username: string;

    @Column()
    paswordHash: string;

    @Column({ type: 'boolean', default: false })
    isActive: boolean;
}