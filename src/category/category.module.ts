import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { multerUploadConfig } from 'src/config/multer-upload.config';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoryController } from './category.controller';
import { CategoryRepo } from './category.repo';
import { CategoryService } from './category.service';

@Module({
  imports: [PrismaModule, MulterModule.register(multerUploadConfig)],
  exports: [CategoryService],
  providers: [CategoryService, CategoryRepo],
  controllers: [CategoryController],
})
export class CategoryModule {}
