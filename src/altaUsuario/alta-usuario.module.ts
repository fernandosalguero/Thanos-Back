import { Module } from '@nestjs/common';
import { AltaUsuarioService } from './services/alta-usuario.service';
import { AltaUsuariosController } from './controller/alta-usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { altaUsuarioEntity } from './entitys/altaUsuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([altaUsuarioEntity])],
  providers: [AltaUsuarioService],
  controllers: [AltaUsuariosController]
})
export class AltaAgenteModule { }
