import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './component/cliente-list/cliente-list.component';
import { UsuarioListComponent } from './component/usuario-list/usuario-list.component';
import { CuentaListComponent } from './component/cuenta-list/cuenta-list.component';
import { TipoDocumentoListComponent } from './component/tipo-documento-list/tipo-documento-list.component';
import { TipoUsuarioListComponent } from './component/tipo-usuario-list/tipo-usuario-list.component';
import { ClienteSaveComponent } from './component/cliente-save/cliente-save.component';
import { UsuarioSaveComponent } from './component/usuario-save/usuario-save.component';
import { TipoDocumentoSaveComponent } from './component/tipo-documento-save/tipo-documento-save.component';
import { TipoTransaccionListComponent } from './component/tipo-transaccion-list/tipo-transaccion-list.component';
import { TipoTransaccionSaveComponent } from './component/tipo-transaccion-save/tipo-transaccion-save.component';
import { TipoUsuarioSaveComponent } from './component/tipo-usuario-save/tipo-usuario-save.component';
import { CuentaSaveComponent } from './component/cuenta-save/cuenta-save.component';
import { ClienteEditComponent } from './component/cliente-edit/cliente-edit.component';
import { CuentaEditComponent } from './component/cuenta-edit/cuenta-edit.component';
import { TipoDocumentoEditComponent } from './component/tipo-documento-edit/tipo-documento-edit.component';
import { TipoTransaccionEditComponent } from './component/tipo-transaccion-edit/tipo-transaccion-edit.component';
import { TipoUsuarioEditComponent } from './component/tipo-usuario-edit/tipo-usuario-edit.component';
import { UsuarioEditComponent } from './component/usuario-edit/usuario-edit.component';


const routes:Routes = [
  { path:'cliente-list', component:ClienteListComponent },
  { path:'cliente-save', component:ClienteSaveComponent },
  { path:'cliente-edit/:id', component:ClienteEditComponent },
  { path:'usuario-list', component:UsuarioListComponent },
  { path:'usuario-save', component:UsuarioSaveComponent },
  { path:'usuario-edit/:id', component:UsuarioEditComponent},
  { path:'tipo-usuario-list', component:TipoUsuarioListComponent },
  { path:'tipo-usuario-save', component:TipoUsuarioSaveComponent },
  { path:'tipo-usuario-edit/:id', component:TipoUsuarioEditComponent },
  { path:'tipo-documento-list', component:TipoDocumentoListComponent },
  { path:'tipo-documento-save', component:TipoDocumentoSaveComponent },
  { path:'tipo-documento-edit/:id', component:TipoDocumentoEditComponent },
  { path:'tipo-transaccion-list', component:TipoTransaccionListComponent },
  { path:'tipo-transaccion-save', component:TipoTransaccionSaveComponent },
  { path:'tipo-transaccion-edit/:id', component:TipoTransaccionEditComponent },
  { path:'cuenta-list', component:CuentaListComponent },
  { path:'cuenta-save', component:CuentaSaveComponent },
  { path:'cuenta-edit/:id', component:CuentaEditComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
