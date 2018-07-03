import { Component, OnInit } from '@angular/core';
import { Contato } from './contatos.model';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'
})
export class ContatossListaComponent implements OnInit{
    contatos: Contato[]; 

    constructor(private contatoService: ContatoService) {}

    ngOnInit(): void{
        // this.contatos = this.contatoService.getContatos();
        this.contatoService.getContatos()
            .then((contatos: Contato[]) => {
                this.contatos = contatos; 
            }).catch(err => console.log(err))
    }
} 