import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { altaUsuarioDTO } from '../dto/altausuario.dto';
import { altaUsuarioEntity } from '../entitys/altaUsuario.entity';


@Injectable()
export class AltaUsuarioService {

    constructor(@InjectRepository(altaUsuarioEntity) private altaUsuarioRepo: Repository<altaUsuarioEntity>) { }

    crearAlta(alta: altaUsuarioDTO) {
        const newAlta = this.altaUsuarioRepo.create(alta)
        return this.altaUsuarioRepo.save(newAlta)
    }

    getListarUsuarios(){
        return this.altaUsuarioRepo.find()
    }

    getbuscarusuario(dni:number){
        return this.altaUsuarioRepo.findOne({
            where: {
                dni
            }
        })

    }


}
