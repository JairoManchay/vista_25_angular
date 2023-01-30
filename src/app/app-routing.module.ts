import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { VistaComponent } from './components/vista/vista.component';
import { CanActivateGuard } from './can-activate.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes=[
  {path: 'vista', component: VistaComponent, canActivate:[CanActivateGuard]},
  {path:'', component: VistaComponent, canActivate:[CanActivateGuard]},
  {path: 'login', component: LoginComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
