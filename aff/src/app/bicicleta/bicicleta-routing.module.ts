import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BicicletaListaComponent } from './bicicleta-lista.component';

const bicicletaRoutings: Routes = [
    {
        path: 'aluguel',
        component: BicicletaListaComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(bicicletaRoutings)
    ],
    exports:[RouterModule]
})
export class BicicletaRoutingModule {}