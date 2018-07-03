import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';

let usuarios: Usuario[];
let size: number = 0;

@Injectable()
export class UsuarioService {
      getUsuarios(): Promise<Usuario[]>{
        return Promise.resolve(usuarios);
    } 
}
