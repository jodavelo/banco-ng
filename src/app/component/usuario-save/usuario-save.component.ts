import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/domain/usuario';
import { TipoUsuario } from 'src/app/domain/tipo-usuario';
import { Activo } from 'src/app/domain/activo';
import { UsuarioService } from 'src/app/service/usuario.service';
import { TipoUsuarioService } from 'src/app/service/tipo-usuario.service';
import { ActivoService } from 'src/app/service/activo.service';

@Component({
  selector: 'app-usuario-save',
  templateUrl: './usuario-save.component.html',
  styleUrls: ['./usuario-save.component.css']
})
export class UsuarioSaveComponent implements OnInit {

  usuario:Usuario;
  selectedOption:number;
  listaTipoUsuario:TipoUsuario[];
  listaActivo:Activo[];
  tipoUsuarioSeleccionado:number;

  showMsg:boolean;
  msg:string="";

  constructor(public usuarioService:UsuarioService,
    public tipoUsuarioService:TipoUsuarioService,
    public activoService:ActivoService
    ) { }

  ngOnInit() {
    this.selectedOption = 1;
    this.getTipoUsuarioId();
    this.tipoUsuarioSeleccionado = this.getTipoUsuarioId();
    this.usuario = new Usuario("", "S", "", 0, "", this.tipoUsuarioSeleccionado);
    
    this.getListaActivo();
    this.getListaTipoUsuario();
  }

  getTipoUsuarioId():number{
    console.log(this.selectedOption);
    return this.selectedOption;
  }

  getListaTipoUsuario(){
    this.tipoUsuarioService.findAll().subscribe(resultado=>{
      this.listaTipoUsuario=resultado;
    });
  }

  getListaActivo(){
    this.listaActivo=this.activoService.findAll();
  }

  save(){
    console.log(this.usuario);
    console.log(this.usuario.tiusId);
    this.usuarioService.save(this.usuario).subscribe(data=>{
      this.showMsg=true,
      this.msg=data.mensaje;
    }, error=>{
      this.showMsg=true;
      this.msg=error.error.mensaje;
    });
  }

}
