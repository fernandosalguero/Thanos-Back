import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { actualizar_usuarioDto } from '../dto/actualizarusuario.dto';
import { altaUsuarioDTO } from '../dto/altausuario.dto';
import { altaUsuarioEntity } from '../entitys/altaUsuario.entity';


@Injectable()
export class AltaUsuarioService {

    constructor(@InjectRepository(altaUsuarioEntity) private altaUsuarioRepo: Repository<altaUsuarioEntity>) { }

    async crearAlta(alta: altaUsuarioDTO) {

        const userexistente= await this.altaUsuarioRepo.findOne({
            where: {
                dni: alta.dni
            }
        })
        if(userexistente){
            return new HttpException('DNI existente, intenta con otro dni', HttpStatus.CONFLICT);
        }

        const newAlta = this.altaUsuarioRepo.create(alta);
        return this.altaUsuarioRepo.save(newAlta);
    }

    getListarUsuarios(){
        return this.altaUsuarioRepo.find();
    }

    async getbuscarusuario(id:number){
        const usuarioexiste= await this.altaUsuarioRepo.findOne({
            where: {
                id,
            },
        });
        if (!usuarioexiste){
            return new HttpException('DNI no encontrado o no existe', HttpStatus.NOT_FOUND);
        }
        return usuarioexiste;
    }

    async deleteelimnarusuario(id:number) {
        const usuarioEliminado= await this.altaUsuarioRepo.delete({id});

        if(usuarioEliminado.affected === 0 ){
            return new HttpException('El usuario no existe y no puede ser eliminado', HttpStatus.NOT_FOUND);
        }
        return usuarioEliminado;
    }


    async updateUsuario(id: number, user:actualizar_usuarioDto){
        const user_actualizar= await this.altaUsuarioRepo.findOne({
        where:{
            id,
        }
        })
        
        if(!user_actualizar){
            return new HttpException('El usuario no existe y no puede ser actualizado', HttpStatus.NOT_FOUND);
        }
        const usuario_actualizado=Object.assign(user_actualizar, user);
        return this.altaUsuarioRepo.save(usuario_actualizado);
    }
    


}
