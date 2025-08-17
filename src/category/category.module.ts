import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoryController } from './category.controller';
import { CategoryRepo } from './category.repo';
import { CategoryService } from './category.service';

@Module({
  imports: [PrismaModule],
  providers: [CategoryService, CategoryRepo],
  controllers: [CategoryController],
})
export class CategoryModule {}
