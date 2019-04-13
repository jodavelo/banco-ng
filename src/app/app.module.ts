import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteListComponent } from './component/cliente-list/cliente-list.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioListComponent } from './component/usuario-list/usuario-list.component';
import { CuentaListComponent } from './component/cuenta-list/cuenta-list.component';
import { TipoDocumentoListComponent } from './component/tipo-documento-list/tipo-documento-list.component';
import { TipoUsuarioListComponent } from './component/tipo-usuario-list/tipo-usuario-list.component';
import { FormsModule } from "@angular/forms";
import { ClienteSaveComponent } from './component/cliente-save/cliente-save.component';
import { UsuarioSaveComponent } from './component/usuario-save/usuario-save.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    UsuarioListComponent,
    CuentaListComponent,
    TipoDocumentoListComponent,
    TipoUsuarioListComponent,
    ClienteSaveComponent,
    UsuarioSaveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
