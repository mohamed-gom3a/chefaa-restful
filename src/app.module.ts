import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AccessJwtAuthGuard } from './auth/access-jwt-auth.guard';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './models/product/product.module';
import { UserModule } from './models/user/user.module';
import { PrismaModule } from './prisma/prisma.module';

import { PurchaseModule } from './models/purchase/purchase.module';
import { MedicationModule } from './medication/medication.module';
import { CategoryModule } from './category/category.module';
import { CateogyrService } from './cateogyr/cateogyr.service';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PrismaModule,
    ProductModule,
    PurchaseModule,
    MedicationModule,
    CategoryModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessJwtAuthGuard,
    },
    CateogyrService,
  ],
})
export class AppModule {}
