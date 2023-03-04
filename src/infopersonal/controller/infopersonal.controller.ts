import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AltaUsuarioService } from 'src/altaUsuario/services/alta-usuario.service';
import { actualizarinfoPersonalDTO } from '../infoPersonalDTO/actualizarinfoper.dto';
import { infoPersonalDTO } from '../infoPersonalDTO/infoPersonal.dto';
import { InfopersonalService } from '../services/infopersonal.service';
@Controller('info-personal')
export class InfopersonalController {

    constructor(
        private altainfopersonal: InfopersonalService,
        private altaService: AltaUsuarioService
    ) { }

    @Post(':id/infoPersonal')
    crearAltainfo(
        @Param('id', ParseIntPipe) id:number,
        @Body() infoPersonal: infoPersonalDTO,)
        {
        return this.altainfopersonal.crearinfoPersonal(id,infoPersonal)
    }    
    }
