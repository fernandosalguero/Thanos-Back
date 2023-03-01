import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { altaUsuarioEntity } from 'src/altaUsuario/entitys/altaUsuario.entity';
import { InfopersonalController } from './controller/infopersonal.controller';
import { infoPersonalEntity } from './entytis/infoPersonal.entity';
import { InfopersonalService } from './services/infopersonal.service';

@Module({
    imports: [TypeOrmModule.forFeature([infoPersonalEntity,altaUsuarioEntity])],
    providers: [InfopersonalService],
    controllers: [InfopersonalController]
})
export class InfopersonalModule {}
