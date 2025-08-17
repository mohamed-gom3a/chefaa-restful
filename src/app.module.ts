import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AccessJwtAuthGuard } from './auth/access-jwt-auth.guard';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './models/category/category.module';
import { MedicationModule } from './models/medication/medication.module';
import { UserModule } from './models/user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PrismaModule,
    MedicationModule,
    CategoryModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessJwtAuthGuard,
    },
  ],
})
export class AppModule {}
