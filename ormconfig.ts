import { ormOptions } from './src/common/database/orm-options';
import { DataSource } from 'typeorm';

export default new DataSource(ormOptions);