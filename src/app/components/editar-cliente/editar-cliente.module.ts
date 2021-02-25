import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarClienteRoutingModule } from './editar-cliente-routing.module';
import { EditarClienteComponent } from './editar-cliente.component';


@NgModule({
  declarations: [EditarClienteComponent],
  imports: [
    CommonModule,
    EditarClienteRoutingModule
  ]
})
export class EditarClienteModule { }
