import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb usuarios"})
export class Usuario{

    @PrimaryGeneratedColumn()
    public id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    public name: string

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    public usuario: string

    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    public senha: string

    @Column({length: 5000})
    public foto: string

    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]
    nome: any;


}