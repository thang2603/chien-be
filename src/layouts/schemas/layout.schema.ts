import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Model } from 'src/share/types/model.types';

export type LayoutDocument = HydratedDocument<Layout>;

@Schema()
export class Layout {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  models: Model[];
}

export const LayoutSchema = SchemaFactory.createForClass(Layout);
