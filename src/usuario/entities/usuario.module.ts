import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "../services/usuario.service";
import { Bcrypt } from "src/auth/bcrypt/bcrypt";
import { UsuarioController } from "../controllers/usuario.controllers";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuarioService, Bcrypt],
    controllers: [UsuarioController],
    exports: [UsuarioService],
})

export class UsuarioModule {}

