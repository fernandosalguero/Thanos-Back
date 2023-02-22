import { Body, Controller, Post, Get } from '@nestjs/common';
import { altaUsuarioDTO } from '../dto/altausuario.dto';
import { AltaUsuarioService } from '../services/alta-usuario.service';

@Controller('alta-usuarios')
export class AltaUsuariosController {

    constructor(
        private altaService: AltaUsuarioService
    ) { }
    
    @Get()
    getaltausuario(): Promise <altaUsuarioDTO[]>{
        return this.altaService.getListarUsuarios();
    }

    @Post()
    createAlta(@Body() newAlta: altaUsuarioDTO): Promise<altaUsuarioDTO> {
        return this.altaService.crearAlta(newAlta)

    }

}
