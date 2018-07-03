import { Component, OnInit } from '@angular/core';
import { Bicicleta } from './bicicleta.model';
import { BicicletaService } from './bicicleta.service';

@Component({
    moduleId: module.id,
    selector: 'bicicleta-lista',
    templateUrl: 'bicicleta-lista.component.html'
})
export class BicicletaListaComponent implements OnInit{
    bicicleta: Bicicleta[]; 

    constructor(private bicicletaService: BicicletaService) {}

    ngOnInit(): void{
        // this.contatos = this.contatoService.getContatos();
        this.bicicletaService.getBicicletas()
            .then((bicicleta: Bicicleta[]) => {
                this.bicicleta = bicicleta; 
            }).catch(err => console.log(err))
    }

    AlocarBicicleta(bici: Bicicleta): void{
        this.bicicletaService.addBicialugada(bici);
    }

    DesalocarBicicleta(bici: Bicicleta): void{
        this.bicicletaService.remuveBiciAlugada(bici);
    }
} 

