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


async crearinfoPersonal (id: number, altainfopersonal: infoPersonalDTO) {

    const userexistente= await this.altaUsuarioRepo.findOne ({
        where:{
            id,
        },
    });

    if (!userexistente){
        return new HttpException('Usuario no encontrado', HttpStatus.NO_CONTENT);

    }
    const nuevoinfopersonal= this.infoPersonalRepo.create(altainfopersonal)
    const guardarNuevoInfoPersonal= await this.infoPersonalRepo.save(nuevoinfopersonal)
    
}


}
