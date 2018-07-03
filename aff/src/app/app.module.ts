import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatosModule } from './contatos/contatos.module';
import { BicicletaModule } from './bicicleta/bicicleta.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BicicletaModule,
    ContatosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
