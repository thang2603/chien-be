import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LayoutsController } from './layouts/layouts.controller';
import { LayoutsModule } from './layouts/layouts.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/layout'),
    LayoutsModule,
  ],
  controllers: [AppController, LayoutsController],
  providers: [AppService],
})
export class AppModule {}
