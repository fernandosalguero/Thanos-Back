import { Body, Controller, Post } from '@nestjs/common';
import { altaDTO } from '../dto/alta.dto';
import { AltaUsuarioService } from '../services/alta-usuario.service';

@Controller('alta-usuarios')
export class AltaUsuariosController {

    constructor(
        private altaService: AltaUsuarioService
    ) { }

    @Post()
    createAlta(@Body() newAlta: altaDTO) {
        return this.altaService.crearAlta(newAlta)
    }

}
