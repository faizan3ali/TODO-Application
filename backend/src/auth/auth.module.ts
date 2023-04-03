import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/local.auth';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import { UserSchema } from 'src/users/users.model';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '60s' },
  }), MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
  controllers: [AuthController],
  providers: [AuthService, UsersService, LocalStrategy]
})
export class AuthModule {}
