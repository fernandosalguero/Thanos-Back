import { Body, Controller, Post, Get, Param, ParseIntPipe, Delete, Patch,} from '@nestjs/common';
import { actualizar_usuarioDto } from '../dto/actualizarusuario.dto';
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
    getbuscarusuraio(@Param('id', ParseIntPipe) id:number){
        return this.altaService.getbuscarusuario(id);
    }

    @Post()
    createAlta(@Body() newAlta: altaUsuarioDTO) {
        return this.altaService.crearAlta(newAlta)

    }
    
    @Delete(':id')
    deleteelimnarusuario(@Param('id', ParseIntPipe) id:number){
    return this.altaService.deleteelimnarusuario(id);

    }

@Patch(':id')
update_Usuarios(@Param('id', ParseIntPipe) id: number, @Body() user:actualizar_usuarioDto){
return this.altaService.updateUsuario(id, user)

}





}
