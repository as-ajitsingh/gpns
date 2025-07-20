import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AdminModule } from '../admin/admin.module';
import { ContractorModule } from '../contractor/contractor.module';
import { AuthGuard } from './auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CustomConfigService } from '../common/config/configuration';

@Module({
  imports: [
    AdminModule,
    ContractorModule,
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: CustomConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn:  configService.get('JWT_EXPIRY') },
      })

    })
  ],
  providers: [AuthService, AuthGuard],
  controllers: [AuthController]
})
export class AuthModule { }
