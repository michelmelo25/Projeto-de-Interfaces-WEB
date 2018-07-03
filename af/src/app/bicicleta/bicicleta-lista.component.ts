import { Component, OnInit } from '@angular/core';
import { Bicicleta } from './bicicleta.model';
import { BicicletaService } from './bicicleta-service';

@Component({
    moduleId: module.id,
    selector: 'bicicleta-lista',
    templateUrl: 'bicicleta-lista.component.html'
})
export class BicicletaListaComponent implements OnInit{
    bicicletas: Bicicleta[]; 

    constructor(private bicicletaServise: BicicletaService) {}

    ngOnInit(): void{
        // this.contatos = this.contatoService.getContatos();
        this.bicicletaServise.getBicicletas()
            .then((bicicletas: Bicicleta[]) => {
                this.bicicletas = bicicletas; 
            }).catch(err => console.log(err))
    }
} 