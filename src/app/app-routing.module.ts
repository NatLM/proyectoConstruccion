import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsesionComponent } from './isesion/isesion.component';
import { RegistroComponent } from './registro/registro.component';
import { TestComponent } from './test/test.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

//deben importarse todos los componentes y registrarlos en el path

const routes: Routes = [
  {path:'',component:IsesionComponent},
  {path:'registro',component:RegistroComponent},
  {path: 'test',component:TestComponent},
  {path: 'home',component:HomeComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'comentarios',component:ComentariosComponent},
  {path: 'preguntas', component:PreguntasComponent}

];

export const appRoutingProviders: any[]=[];

//export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
