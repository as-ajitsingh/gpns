import { Injectable } from '@nestjs/common';
import LoginDto from './login.dto';
import { AdminService } from '../admin/admin.service';
import { ContractorService } from '../contractor/contractor.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly adminService: AdminService, private readonly contractorService: ContractorService, private readonly jwtService: JwtService) { }

    async login(loginDto: LoginDto) {
        let user;

        try {
            const admin = await this.adminService.getAdmin(loginDto.username, loginDto.password);
            user = { ...admin, role: 'ADMIN' };
        } catch (error) {
            if (error.message !== 'admin not found') throw error;

            const contractor = await this.contractorService.getContractor(loginDto.username, loginDto.password);
            user = { ...contractor, role: 'CONTRACTOR' };
        }

        return { access_token: await this.jwtService.signAsync({ sub: user.username, role: user.role }) }

    }
}
