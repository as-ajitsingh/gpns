import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import Admin from './admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>,
        @InjectPinoLogger(AdminService.name) private readonly logger: PinoLogger,
    ) { }

    async getAdmin(username: string, password: string) {
        const admin = await this.adminRepository.findOneBy({ username });

        if (!admin) throw new Error('admin not found');

        if (!await bcrypt.compare(password, admin.paswordHash)) throw new Error('unauthorized');

        return admin;

    }

    async getAllAdmins() {
        this.logger.info('getting admins');
        return this.adminRepository.find();
    }
}
