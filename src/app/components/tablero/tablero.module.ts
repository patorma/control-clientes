import { ClientesComponent } from './../clientes/clientes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableroRoutingModule } from './tablero-routing.module';
import { TableroComponent } from './tablero.component';




@NgModule({
  declarations: [TableroComponent,ClientesComponent ],
  imports: [
    CommonModule,
    TableroRoutingModule,
    
   
  ]
})
export class TableroModule { }
