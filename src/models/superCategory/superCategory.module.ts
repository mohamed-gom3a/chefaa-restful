import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { multerUploadConfig } from 'src/config/multer-upload.config';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SuperCategoryController } from './superCategory.controller';
import { SuperCategoryRepo } from './superCategory.repo';
import { SuperCategoryService } from './superCategory.service';

@Module({
  imports: [PrismaModule, MulterModule.register(multerUploadConfig)],
  exports: [SuperCategoryService],
  providers: [SuperCategoryService, SuperCategoryRepo],
  controllers: [SuperCategoryController],
})
export class SuperCategoryModule {}
