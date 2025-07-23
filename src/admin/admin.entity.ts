import { Column, Entity, Unique } from 'typeorm';
import { BaseEntity } from '../common/database/base.entity';
import { Exclude } from 'class-transformer';

@Entity()
export default class Admin extends BaseEntity {
    @Column({ unique: true })
    username: string;

    @Column()
    @Exclude()
    passwordHash: string;

    @Column({ type: 'boolean', default: false })
    isActive: boolean;
}