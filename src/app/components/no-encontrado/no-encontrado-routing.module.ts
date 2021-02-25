import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoEncontradoComponent } from './no-encontrado.component';

const routes: Routes = [
  {path: '', component:  NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoEncontradoRoutingModule { }
