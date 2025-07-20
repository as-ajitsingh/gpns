import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AdminModule } from '../admin/admin.module';
import { ContractorModule } from '../contractor/contractor.module';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    AdminModule,
    ContractorModule,
    JwtModule.register({
      global: true,
      secret: 'jwtConstants.secret',
      signOptions: { expiresIn: '60s' },
    })
  ],
  providers: [AuthService, AuthGuard],
  controllers: [AuthController]
})
export class AuthModule { }
