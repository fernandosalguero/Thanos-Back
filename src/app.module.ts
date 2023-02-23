import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AltaUsuarioModule } from './altaUsuario/alta-usuario.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Papel*01',
      database: 'thanos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true
    }),
    AltaUsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
