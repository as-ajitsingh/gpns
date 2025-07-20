import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

export const ormOptions: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'psql-pwd',
    database: 'gpns',
    autoLoadEntities: true,
    synchronize: false,
    entities: []
}