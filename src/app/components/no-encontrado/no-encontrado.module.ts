import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoEncontradoRoutingModule } from './no-encontrado-routing.module';
import { NoEncontradoComponent } from './no-encontrado.component';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [NoEncontradoComponent],
  imports: [
   
    CommonModule,
    NoEncontradoRoutingModule,
   
  ]
})
export class NoEncontradoModule { }
