import { Module } from '@nestjs/common';
import { AltaUsuarioService } from './services/alta-usuario.service';
import { AltaUsuariosController } from './controller/alta-usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { altaUsuarioEntity } from './entitys/altaUsuario.entity';
import { infoPersonalEntity } from 'src/infopersonal/entytis/infoPersonal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([altaUsuarioEntity, infoPersonalEntity])],
  providers: [AltaUsuarioService],
  controllers: [AltaUsuariosController]
})
export class AltaUsuarioModule { }
