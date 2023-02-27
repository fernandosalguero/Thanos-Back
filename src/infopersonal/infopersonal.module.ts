import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfopersonalController } from './controller/infopersonal.controller';
import { infoPersoalEntity } from './entytis/infoPersonal.entity';
import { InfopersonalService } from './services/infopersonal.service';

@Module({
    imports: [TypeOrmModule.forFeature([infoPersoalEntity])],
    providers: [InfopersonalService],
    controllers: [InfopersonalController]
})
export class InfopersonalModule {}
