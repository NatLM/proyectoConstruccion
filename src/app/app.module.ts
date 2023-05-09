import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//1. importa las rutas creadas

import { appRoutingProviders} from "./app-routing.module";
import { AppRoutingModule } from './app-routing.module';

//2. importa los componentes
import { AppComponent } from './app.component';
import { IsesionComponent } from './isesion/isesion.component';
import { RegistroComponent } from './registro/registro.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PreguntasComponent } from './preguntas/preguntas.component';

@NgModule({
  declarations: [
    AppComponent,
    IsesionComponent,
    RegistroComponent,
    TestComponent,
    HomeComponent,
    ComentariosComponent,
    PerfilComponent,
    PreguntasComponent
  ],
  imports: [ BrowserModule, AppRoutingModule ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
