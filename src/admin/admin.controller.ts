import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('admin')
@UseGuards(AuthGuard)
export class AdminController {
    constructor(private readonly adminService: AdminService) { }
    
    @Get()
    async getAllAdmins() {
        return this.adminService.getAllAdmins();
    }
}
