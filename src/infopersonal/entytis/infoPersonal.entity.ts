import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Infopersonal' })
export class infoPersoalEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Nombre: string

    @Column()
    Apellido: string

    @Column({ type: 'datetime'})
    fechadeNacimiento: Date 
}