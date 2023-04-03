import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import {
    CollectionDto,
    ValidationPipe,
    CollectionResponse
  } from '@forlagshuset/nestjs-mongoose-paginate';

  
@Controller('todo')
export class TodoController {
    constructor(private readonly TodoService: TodoService) { }


    @Post('')
    async todo(
        @Body() todoDto: any
    ): Promise<any> {
        console.log("aaaaaa",todoDto)
        const result = await this.TodoService.createTodo(
            todoDto
        );
        return result;
    }

    @Post('deleteById')
    async DeleteItem(
        @Body() id: any
    ): Promise<any> {
        console.log("aaaaaaaaa",id)
        const result = await this.TodoService.deleteByID(
            id
        );
        return result;
    }

    @Post('deleteById')
    async updateStatus(
        @Body() id: any
    ): Promise<any> {
        console.log("aaaaaaaaa",id)
        const result = await this.TodoService.deleteByID(
            id
        );
        return result;
    }

    @Post('updateStatus')
    async UpdateStatus(
        @Body() item: any
    ): Promise<any> {
        const result = await this.TodoService.updateByID(
          item
        );
        return result;
    }
    
    @Get('')
    async getTodo(
        @Query()    
    collectionDto: CollectionDto,
    ): Promise<CollectionResponse<Document>> {
        console.log(collectionDto)
        const result = await this.TodoService.getall(
            collectionDto
        );
        return result;
    }
}
