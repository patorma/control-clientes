import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [ClientesComponent],
  imports: [
    
    CommonModule,

   
  ],
  exports:[
    ClientesComponent
  ]
})
export class ClientesModule { }
