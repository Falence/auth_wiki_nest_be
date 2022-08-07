import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { Doc } from './entities/doc.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Doc]), AuthModule],
  providers: [DocsService],
  controllers: [DocsController],
})
export class DocsModule {}
