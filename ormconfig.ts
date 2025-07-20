import { ormOptions } from './src/common/database/orm-options';
import { DataSource, DataSourceOptions } from 'typeorm';

export default new DataSource({
    ...ormOptions as DataSourceOptions,
    entities: ['./src/**/*.entity.ts'],
    migrations: ['./src/migrations/*.ts']
});