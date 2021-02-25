import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarClienteComponent } from './editar-cliente.component';

const routes: Routes = [
  {path: '', component: EditarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarClienteRoutingModule { }
