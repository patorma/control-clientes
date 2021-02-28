import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [RegistroComponent],
  imports: [
   
    CommonModule,
    RegistroRoutingModule,
    
  ]
})
export class RegistroModule { }
