// las entidades crean las tablas en mysql
import { infoPersonalEntity } from "src/infopersonal/entytis/infoPersonal.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity({ name: 'altausuario' })
export class altaUsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    fechaAlta: Date

    @Column({ unique: true })
    dni: number

    @Column()
    contraseña: string

    @Column()
    rol: string

    @Column()
    lider: string

    @Column()
    jefe: string
    
    @OneToOne(()=> infoPersonalEntity) 
    @JoinColumn()
    Info_personal=infoPersonalEntity;
}