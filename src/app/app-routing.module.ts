import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarUsuarioComponent } from './components/verificar-usuario/verificar-usuario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { InicioComponent } from './components/inicio/inicio.component';




const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  {path: 'verificar-correo', component: VerificarUsuarioComponent },
  {path: 'recuperar-password', component: RecuperarPasswordComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'inicio',component:InicioComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
