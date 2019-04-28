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
import { TipoDocumentoSaveComponent } from './component/tipo-documento-save/tipo-documento-save.component';
import { TipoTransaccionListComponent } from './component/tipo-transaccion-list/tipo-transaccion-list.component';
import { TipoTransaccionSaveComponent } from './component/tipo-transaccion-save/tipo-transaccion-save.component';
import { TipoUsuarioSaveComponent } from './component/tipo-usuario-save/tipo-usuario-save.component';
import { CuentaSaveComponent } from './component/cuenta-save/cuenta-save.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { ClienteDeleteComponent } from './component/cliente-delete/cliente-delete.component';
import { ClienteEditComponent } from './component/cliente-edit/cliente-edit.component';
import { CuentaEditComponent } from './component/cuenta-edit/cuenta-edit.component';
import { TipoDocumentoEditComponent } from './component/tipo-documento-edit/tipo-documento-edit.component';
import { TipoTransaccionEditComponent } from './component/tipo-transaccion-edit/tipo-transaccion-edit.component';
import { TipoUsuarioEditComponent } from './component/tipo-usuario-edit/tipo-usuario-edit.component';
import { UsuarioEditComponent } from './component/usuario-edit/usuario-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    UsuarioListComponent,
    CuentaListComponent,
    TipoDocumentoListComponent,
    TipoUsuarioListComponent,
    ClienteSaveComponent,
    UsuarioSaveComponent,
    TipoDocumentoSaveComponent,
    TipoTransaccionListComponent,
    TipoTransaccionSaveComponent,
    TipoUsuarioSaveComponent,
    CuentaSaveComponent,
    MainNavbarComponent,
    ClienteDeleteComponent,
    ClienteEditComponent,
    CuentaEditComponent,
    TipoDocumentoEditComponent,
    TipoTransaccionEditComponent,
    TipoUsuarioEditComponent,
    UsuarioEditComponent
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
