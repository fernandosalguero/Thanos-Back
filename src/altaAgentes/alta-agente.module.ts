import { Module } from '@nestjs/common';
import { AltaAgenteService } from './services/alta-agente.service';
import { AltaUsuariosController } from './controller/alta-usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { altaAgenteEntity } from './entitys/altaAgente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([altaAgenteEntity])],
  providers: [AltaAgenteService],
  controllers: [AltaUsuariosController]
})
export class AltaAgenteModule { }
