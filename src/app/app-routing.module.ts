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


const routes:Routes = [
  { path:'cliente-list', component:ClienteListComponent },
  { path:'cliente-save', component:ClienteSaveComponent },
  { path:'usuario-list', component:UsuarioListComponent },
  { path:'usuario-save', component:UsuarioSaveComponent },
  { path:'tipo-usuario-list', component:TipoUsuarioListComponent },
  { path:'tipo-documento-list', component:TipoDocumentoListComponent },
  { path:'cuenta-list', component:CuentaListComponent }
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
