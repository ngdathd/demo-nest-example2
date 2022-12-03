import { Module } from '@nestjs/common';
import { Demo1/cat/dataAcService } from './demo1/cat/data-ac.service';

@Module({
  providers: [Demo1/cat/dataAcService],
  exports: [Demo1/cat/dataAcService],
})
export class Demo1/cat/dataAcModule {}
