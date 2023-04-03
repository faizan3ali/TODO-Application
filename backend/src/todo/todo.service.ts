import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, typeDocument } from './todo.model';
import {
    DocumentCollector,
  } from '@forlagshuset/nestjs-mongoose-paginate';

@Injectable()
export class TodoService {

    constructor(@InjectModel('todo') private readonly Todo: Model<typeDocument>) { }
   

    async createTodo(item:Todo): Promise<any> {
        try {
        return this.Todo.create(    
            item
        );
    } catch (error) {
        console.log(error)
    }  
    }

    async  deleteByID(id:any): Promise<any> {
       
        try {
             return await  this.Todo.deleteOne({"_id": id});
        } catch (error) {
            console.log(error)
        }  
    }

    async  updateByID(item:Todo): Promise<any> {
        try {
             return await  this.Todo.findOneAndUpdate({ "_id":item._id },  item);
        } catch (error) {
            console.log(error)
        }
    }


    async getall(query: any ): Promise<any> {
        try {
        const collector = new DocumentCollector<typeDocument>(this.Todo);
        return collector.find(query);
    } catch (error) {
        console.log(error)
    }
    }
}
