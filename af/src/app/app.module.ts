import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BicicletaModule } from './bicicleta/bicicleta.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BicicletaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
