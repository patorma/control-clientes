import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './components/cabecero/cabecero.component';
// import { TableroComponent } from './components/tablero/tablero.component';
// import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
// import { LoginComponent } from './components/login/login.component';
// import { RegistroComponent } from './components/registro/registro.component';
//import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
// import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
