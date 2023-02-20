import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { altaDTO } from '../dto/alta.dto';
import { altaUsuarioEntity } from '../entitys/altaUsuario.entity';


@Injectable()
export class AltaUsuarioService {

    constructor(@InjectRepository(altaUsuarioEntity) private altaUsuarioRepo: Repository<altaUsuarioEntity>) { }

    crearAlta(alta: altaDTO) {
        const newAlta = this.altaUsuarioRepo.create(alta)
        return this.altaUsuarioRepo.save(newAlta)
    }

}
