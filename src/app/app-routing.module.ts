import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'tablero', loadChildren: () =>
    import('./components/tablero/tablero.module').then(m =>  m.TableroModule)
  },
  {
    path: 'login', loadChildren: () =>
    import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registrarse', loadChildren: () =>
    import('./components/registro/registro.module').then(m => m.RegistroModule)
  },
  {
     path: 'configuracion', loadChildren: () =>
     import('./components/configuracion/configuracion.module').then(m => m.ConfiguracionModule)
  },
  {
    path: 'cliente/editar/:id', loadChildren: () =>
    import('./components/editar-cliente/editar-cliente.module').then(m => m.EditarClienteModule)
  },
  {
    path: '**', loadChildren: () =>
    import('./components/no-encontrado/no-encontrado.module').then(m => m.NoEncontradoModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tablero'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
