import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { ListadoUsuariosComponent } from './pages/listado-usuarios/listado-usuarios.component';


const routes: Routes = [
  {path:'crear-usuario',component: CrearUsuarioComponent},
  {path:'editar-usuario',component: EditarUsuarioComponent},
  {path:'listado-usuarios',component: ListadoUsuariosComponent},
  {path:'**',pathMatch:'full',redirectTo:'listado-usuarios'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
