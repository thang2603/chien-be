import { Module } from '@nestjs/common';
import { LayoutsService } from './layouts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Layout, LayoutSchema } from './schemas/layout.schema';
import { LayoutsController } from './layouts.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Layout.name, schema: LayoutSchema }]),
  ],
  providers: [LayoutsService],
  controllers: [LayoutsController],
  exports: [LayoutsService],
})
export class LayoutsModule {}
