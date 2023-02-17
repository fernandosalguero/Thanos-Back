import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { altaDTO } from '../dto/alta.dto';
import { altaAgenteEntity } from '../entitys/altaAgente.entity';


@Injectable()
export class AltaAgenteService {

    constructor(@InjectRepository(altaAgenteEntity) private  altaAgenteRepo: Repository<altaAgenteEntity>){}

    crearAlta(alta: altaDTO){
        const newAlta = this.altaAgenteRepo.create(alta)
        return this.altaAgenteRepo.save(newAlta)
    }

}
