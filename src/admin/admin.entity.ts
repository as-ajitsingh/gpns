import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/database/base.entity';
import { Exclude } from 'class-transformer';

@Entity()
export default class Admin extends BaseEntity {
    @Column()
    username: string;

    @Column()
    @Exclude()
    paswordHash: string;

    @Column({ type: 'boolean', default: false })
    isActive: boolean;
}