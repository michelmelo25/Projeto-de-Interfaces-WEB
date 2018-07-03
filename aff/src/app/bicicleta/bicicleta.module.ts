import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BicicletaListaComponent } from './bicicleta-lista.component';
import { BicicletaRoutingModule } from './bicicleta-routing.module';
import { BicicletaService } from './bicicleta.service';

@NgModule({
    imports: [
        CommonModule,
        BicicletaRoutingModule
    ],
    declarations: [
        BicicletaListaComponent       
    ],
    exports: [
        BicicletaListaComponent
    ],
    providers: [
        BicicletaService
    ]
})
export class BicicletaModule {}