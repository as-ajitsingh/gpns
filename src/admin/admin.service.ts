import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import Admin from './admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
    constructor(@InjectRepository(Admin) private readonly adminRepository: Repository<Admin>) { }

    async getAdmin(username: string, password: string) {
        const admin = await this.adminRepository.findOneBy({ username });

        if (!admin) throw new Error('admin not found');

        if (!await bcrypt.compare(password, admin.paswordHash)) throw new Error('unauthorized');

        return admin;

    }

    async getAllAdmins() {
        return this.adminRepository.find();
    }
}
