import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './todo.controller';
import { Todoschema } from './todo.model';
import { TodoService } from './todo.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "todo", schema:Todoschema  }])],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
