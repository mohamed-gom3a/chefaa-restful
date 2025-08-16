import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { multerUploadConfig } from 'src/config/multer-upload.config';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [PrismaModule, MulterModule.register(multerUploadConfig)],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
