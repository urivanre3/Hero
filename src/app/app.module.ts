import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { FormsModule } from '@angular/forms';
import { MiembroService } from './shared/miembro.service';
import { MiembrosComponent } from './miembros/miembros.component';
import { VideoComponent } from './video/video.component';
import { DomseguroPipe } from './domseguro.pipe';
import { CreadorComponent } from './creador/creador.component';
import { GalleriaComponent } from './galleria/galleria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    SearchComponent,
    UnheroeComponent,
    MiembrosComponent,
    VideoComponent,
    DomseguroPipe,
    CreadorComponent,
    GalleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MiembroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
