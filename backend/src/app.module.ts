import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

import { TodoModule } from './todo/todo.module';
@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb://localhost/authentication'), AuthModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
