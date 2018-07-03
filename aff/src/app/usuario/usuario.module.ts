import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  } from './usuario-login.component';
import { UsuarioRoutingModule } from './usuarios-routing.module';
import { UsuarioService } from './usuario.service';

@NgModule({
    imports: [
        CommonModule,
        UsuarioRoutingModule
    ],
    declarations: [
              
    ],
    exports: [
        
    ],
    providers: [
        UsuarioService
    ]
})
export class UsuarioModule {}