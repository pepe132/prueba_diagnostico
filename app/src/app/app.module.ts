import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { ListadoUsuariosComponent } from './pages/listado-usuarios/listado-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    ListadoUsuariosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
