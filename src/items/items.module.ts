/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './schemas/item.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name:'Item',schema:ItemSchema}
  ])],
  controllers: [ItemsController],
  providers: [ItemService],
})
export class ItemsModule {}
