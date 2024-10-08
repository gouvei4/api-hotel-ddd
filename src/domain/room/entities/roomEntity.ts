import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Room extends Document {
  @Prop({ required: true })
  roomNumber: number;

  @Prop({ required: true })
  roomType: string;

  @Prop({ required: true })
  capacity: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  status: string;

  @Prop({ required: false })
  amenities: string[];

  @Prop({ required: false })
  description: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
