import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatossListaComponent } from './contatos-lista.component';
import { ContatoDetalheComponent } from './contatos-detalhe.component';

const contatoRoutings: Routes = [
    {
        path: 'contato',
        component: ContatossListaComponent
    },
    {
        path: 'contato/save',
        component: ContatoDetalheComponent
    },
    {
        path: 'contato/save/:id',
        component: ContatoDetalheComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(contatoRoutings)
    ],
    exports:[RouterModule]
})
export class ContatoRoutingModule {}