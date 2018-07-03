import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLoginComponent } from './usuario-login.component';

const usuarioRoutings: Routes = [
    {
        path: 'login',
        component: UsuarioLoginComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(usuarioRoutings)
    ],
    exports:[RouterModule]
})
export class UsuarioRoutingModule {}