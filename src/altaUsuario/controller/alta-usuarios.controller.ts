import { Body, Controller, Post } from '@nestjs/common';
import { altaUsuarioDTO } from '../dto/altausuario.dto';
import { AltaUsuarioService } from '../services/alta-usuario.service';

@Controller('alta-usuarios')
export class AltaUsuariosController {

    constructor(
        private altaService: AltaUsuarioService
    ) { }

    @Post()
    createAlta(@Body() newAlta: altaUsuarioDTO) {
        return this.altaService.crearAlta(newAlta)
    }

}
