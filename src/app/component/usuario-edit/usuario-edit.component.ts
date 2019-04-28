import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivoService } from 'src/app/service/activo.service';
import { TipoUsuarioService } from 'src/app/service/tipo-usuario.service';
import { Usuario } from 'src/app/domain/usuario';
import { Activo } from 'src/app/domain/activo';
import { TipoUsuario } from 'src/app/domain/tipo-usuario';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  public id:string;
  public usuario:Usuario;

  public listaTipoUsuario:TipoUsuario[];
  public listaActivo:Activo[];

  public showMsg:boolean;
  public msg:string="";

  constructor(
    public router:Router,
    public activeRouter:ActivatedRoute,
    public usuarioService:UsuarioService,
    public activoService:ActivoService,
    public tipoUsuarioService:TipoUsuarioService
  ) { }

  ngOnInit() {
    let params = this.activeRouter.params['_value'];
    this.id = params.id;
    console.log(this.id);
    this.getUsuarioById();

    this.getListaActivo();
    this.getListaTipoUsuario();
  }

  getListaActivo(){
    this.listaActivo = this.activoService.findAll();
  }

  getUsuarioById(){
    this.usuarioService.findById(this.id).subscribe(data=>{
      this.usuario = data;
      console.log(this.usuario);
    }, error=>{});
  }

  getListaTipoUsuario(){
    this.tipoUsuarioService.findAll().subscribe(data=>{
      this.listaTipoUsuario = data;
    }, error=>{});
  }

  update(){
    console.log(this.usuario);
    this.usuarioService.update(this.usuario).subscribe(data=>{
      this.showMsg=true;
      this.msg=data.mensaje;
      this.router.navigate(['/usuario-list']);
    }, error=>{
      this.showMsg=true;
      this.msg=error.error.mensaje;
    });
  }

}
