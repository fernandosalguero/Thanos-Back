import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'infopersonal' })
export class infoPersonalEntity {

    @PrimaryGeneratedColumn()
    
    id: number

    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column()
    fechadeNacimiento: Date 

    @Column()
    avatar?: string

}