import { Module } from '@nestjs/common';
import { Demo/cat/dataAcService } from './demo/cat/data-ac.service';

@Module({
  providers: [Demo/cat/dataAcService],
  exports: [Demo/cat/dataAcService],
})
export class Demo/cat/dataAcModule {}
