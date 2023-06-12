import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarUsuarioComponent } from './components/verificar-usuario/verificar-usuario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environment/environment';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarPasswordComponent,
    RegistrarUsuarioComponent,
    VerificarUsuarioComponent,
    DashboardComponent,
    SpinnerComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
