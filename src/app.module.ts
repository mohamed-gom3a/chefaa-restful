import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AccessJwtAuthGuard } from './auth/access-jwt-auth.guard';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './models/product/product.module';
import { UserModule } from './models/user/user.module';
import { PrismaModule } from './prisma/prisma.module';

import { PurchaseModule } from './models/purchase/purchase.module';
import { MedicationModule } from './medication/medication.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PrismaModule,
    ProductModule,
    PurchaseModule,
    MedicationModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessJwtAuthGuard,
    },
  ],
})
export class AppModule {}
