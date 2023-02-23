import { Body, Controller, Post, Get, Param, ParseIntPipe } from '@nestjs/common';
import { altaUsuarioDTO } from '../dto/altausuario.dto';
import { AltaUsuarioService } from '../services/alta-usuario.service';

@Controller('alta-usuarios')
export class AltaUsuariosController {

    constructor(
        private altaService: AltaUsuarioService
    ) { }

    @Get()
    getlistarusuario(): Promise <altaUsuarioDTO[]>{
        return this.altaService.getListarUsuarios();
    }

    @Get(':id') /*mostra*/
    getbuscarusuraio(@Param('id', ParseIntPipe) id:number): Promise <altaUsuarioDTO>{
        return this.altaService.getbuscarusuario(id);
    }

    @Post()
    createAlta(@Body() newAlta: altaUsuarioDTO): Promise<altaUsuarioDTO> {
        return this.altaService.crearAlta(newAlta)

    }

}
