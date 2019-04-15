import { Component, OnInit } from '@angular/core';
import { TipoUsuario } from 'src/app/domain/tipo-usuario';
import { Activo } from 'src/app/domain/activo';
import { TipoUsuarioService } from 'src/app/service/tipo-usuario.service';
import { ActivoService } from 'src/app/service/activo.service';

@Component({
  selector: 'app-tipo-usuario-save',
  templateUrl: './tipo-usuario-save.component.html',
  styleUrls: ['./tipo-usuario-save.component.css']
})
export class TipoUsuarioSaveComponent implements OnInit {

  tipoUsuario:TipoUsuario;
  listaTipoUsuario:TipoUsuario[];
  listaActivo:Activo[];

  showMsg:boolean = false;
  msg:string="";

  constructor(
    public tipoUsuarioService:TipoUsuarioService,
    public activoService:ActivoService
  ) { }

  ngOnInit() {
    this.tipoUsuario = new TipoUsuario(null, "S", "");
    this.getListaActivo();
  }

  getListaActivo(){
    this.listaActivo = this.activoService.findAll();
  }

  save(){
    console.log(this.tipoUsuario);
    this.tipoUsuarioService.save(this.tipoUsuario).subscribe(data=>{
      this.showMsg=true,
      this.msg=data.mensaje
    }, error=>{
      this.showMsg=true,
      this.msg=error.error.mensaje;
    });
  }

}
