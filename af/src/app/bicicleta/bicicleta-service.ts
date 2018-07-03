import { Injectable } from '@angular/core';
import { Bicicleta } from './bicicleta.model';

// export const BICICLETASALUGADAS: Bicicleta[] = []

let bicicletasAlugadas: Bicicleta[];
let size: number = 0;

@Injectable()
export class BicicletaService {
    
    addBicialugada( bici: Bicicleta): void{
        bicicletasAlugadas[size] = bici;
        size += 1;
    }

    remuveBiciAlugada(bici: Bicicleta): void{
        for( let i = 0; i < size; i++){
            if(bicicletasAlugadas[i].id == bici.id){
                size -= 1;
            }
        }
    }

    getBicicletas(): Promise<Bicicleta[]>{
        return Promise.resolve(bicicletasAlugadas);
    }
}
