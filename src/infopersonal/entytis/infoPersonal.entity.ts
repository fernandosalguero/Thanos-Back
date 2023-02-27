import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Infopersonal' })
export class infoPersoalEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column({ type: 'datetime'})
    fechadeNacimiento: Date 
}