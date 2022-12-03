import { Module } from '@nestjs/common';
import { Demo/dogService } from './demo/dog.service';

@Module({
  providers: [Demo/dogService],
  exports: [Demo/dogService],
})
export class Demo/dogModule {}
