import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";

import { altaUsuarioEntity } from 'src/altaUsuario/entitys/altaUsuario.entity'; 

@Entity({ name: 'infopersonal' })
export class infoPersonalEntity {

    @PrimaryGeneratedColumn()
    
    id: number

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    fechadeNacimiento: Date;

    @Column()
    avatar?: string;

    @OneToOne(()=>altaUsuarioEntity, (altaUsuarioEntity) => altaUsuarioEntity.infoPersonal )
    altausuario:altaUsuarioEntity;
}