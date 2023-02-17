import { Body, Controller, Post } from '@nestjs/common';
import { altaDTO } from '../dto/alta.dto';
import { AltaAgenteService } from '../services/alta-agente.service';

@Controller('alta-usuarios')
export class AltaUsuariosController {

    constructor(
        private altaService: AltaAgenteService
    ){}

    @Post()
    createAlta(@Body() newAlta: altaDTO){
        return this.altaService.crearAlta(newAlta)
    }

}
