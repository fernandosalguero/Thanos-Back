import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { infoPersonalEntity } from '../entytis/infoPersonal.entity';
import { infoPersonalDTO } from '../infoPersonalDTO/infoPersonal.dto';

@Injectable()
export class InfopersonalService {

constructor(@InjectRepository(infoPersonalEntity) private infoPersonalRepo: Repository<infoPersonalEntity>){}

async crearAlta(alta: infoPersonalDTO) {

    
}


}
