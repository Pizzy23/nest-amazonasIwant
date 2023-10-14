import { Module } from '@nestjs/common';
import { EntityModule } from './entity/entity.module';
import { UtilModule } from 'src/util/util.module';
import { InternetController, RegionController } from './controller';
import { InternetService, RegionService } from './service';

@Module({
  imports: [EntityModule, UtilModule],
  controllers: [InternetController, RegionController],
  providers: [RegionService, InternetService],
})
export class ContextModule {}
