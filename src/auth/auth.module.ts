import { Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";
import { UsuarioModule } from "../usuario/usuario.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../auth/constants/constants";
import { AuthService } from "../auth/services/auth.services";
import { LocalStrategy } from "../auth/strategy/local.strategy";
import { AuthController } from "../auth/controllers/auth.controller";
import { JwtStrategy } from "./strategy/jwt.strategy";

 


@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions:{
                expiresIn: '1h'
            },
        }),
    ],
    providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [Bcrypt],

})

export class AuthModule { }