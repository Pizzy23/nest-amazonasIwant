import { Module } from '@nestjs/common';
import { PrismaService } from 'src/config';
import { InternetEntity } from './internet/internet.entity';
import { RegionEntity } from './region/region.entity';

@Module({
  exports: [
    PrismaService,
    InternetEntity,
    RegionEntity,
  ],
  providers: [
    PrismaService,
    InternetEntity,
    RegionEntity,
  ],
})
export class EntityModule {}
