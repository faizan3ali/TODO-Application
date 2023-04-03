import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import {now} from "mongoose";
export type typeDocument = Todo & Document;
import {
  CollectionProperties,
  Expose
} from '@forlagshuset/nestjs-mongoose-paginate';

@Schema({ timestamps: true })
export class Todo extends CollectionProperties {

  _id: mongoose.Schema.Types.ObjectId;
  
  @Prop()
  @Expose ({ sortable: true, default: true, filterable: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  @Expose({ name: 'createdAt', sortable: true,filterable: true  })
  created_at: 'desc' | 'asc';

  @Prop()
  status: boolean=false;
}

export const Todoschema = SchemaFactory.createForClass(Todo);
