import { Module } from '@nestjs/common';
import { Demo/catService } from './demo/cat.service';

@Module({
  providers: [Demo/catService],
  exports: [Demo/catService],
})
export class Demo/catModule {}
