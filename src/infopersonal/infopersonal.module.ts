import { Module } from '@nestjs/common';
import { InfopersonalController } from './controller/infopersonal.controller';
import { InfopersonalService } from './infopersonal.service';

@Module({
  controllers: [InfopersonalController],
  providers: [InfopersonalService]
})
export class InfopersonalModule {}
