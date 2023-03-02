import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { infoPersonalEntity } from '../entytis/infoPersonal.entity';
import { infoPersonalDTO } from '../infoPersonalDTO/infoPersonal.dto';
import { altaUsuarioEntity } from 'src/altaUsuario/entitys/altaUsuario.entity';

@Injectable()
export class InfopersonalService {

constructor(
    @InjectRepository(infoPersonalEntity) private infoPersonalRepo: Repository<infoPersonalEntity>,
    @InjectRepository(altaUsuarioEntity) private altaUsuarioRepo: Repository<altaUsuarioEntity>
    ){} 


async crearinfoPersonal (id: number, infoPersonal: infoPersonalDTO) {

    const userexistente= await this.altaUsuarioRepo.findOne ({
        where:{
            id,
        },
    });

    if (!userexistente){
        return new HttpException('Usuario no encontrado', HttpStatus.NO_CONTENT);

    }
    const nuevoinfopersonal= this.infoPersonalRepo.create(infoPersonal)
    const guardarNuevoInfoPersonal= await this.infoPersonalRepo.save(nuevoinfopersonal)
    userexistente.infoPersonal= guardarNuevoInfoPersonal
    return this.altaUsuarioRepo.save(userexistente)
}



// async editarinfoPersonal (id: number, editarInfopersonal: infoPersonalDTO) {

//     const userexistente= await this.altaUsuarioRepo.findOne ({
//         where:{
//             id,
//         },
//     });

//     if (!userexistente){
//         return new HttpException('Usuario no encontrado', HttpStatus.NO_CONTENT);

//     }
    
//     const actualizarinfopersonal= await this.infoPersonalRepo.findOne({
//         where:{
//             id,
//         }
//         })
        
//         if(!actualizarinfopersonal){
//             return new HttpException('El usuario no existe y no puede ser actualizado', HttpStatus.NOT_FOUND);
//         }
//         const usuario_infopersonal=Object.assign(actualizarinfopersonal, editarInfopersonal);
//         return this.infoPersonalRepo.save(actualizarinfopersonal);

// }



}
