import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { UserSchema } from "./users.model"
import { UsersController } from './users.controller';
import { UsersService } from './users.service';


@Module({
    imports: [MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
    providers: [UsersService],
    controllers: [UsersController]

})
export class UsersModule {}
