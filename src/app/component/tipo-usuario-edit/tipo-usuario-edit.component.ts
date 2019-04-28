import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoUsuarioService } from 'src/app/service/tipo-usuario.service';
import { ActivoService } from 'src/app/service/activo.service';
import { TipoUsuario } from 'src/app/domain/tipo-usuario';
import { Activo } from 'src/app/domain/activo';

@Component({
  selector: 'app-tipo-usuario-edit',
  templateUrl: './tipo-usuario-edit.component.html',
  styleUrls: ['./tipo-usuario-edit.component.css']
})
export class TipoUsuarioEditComponent implements OnInit {

  public id:number;
  public tipoUsuario:TipoUsuario;

  public listaActivo:Activo[];

  public showMsg:boolean;
  public msg:string = "";

  constructor(
    public router:Router,
    public activeRouter:ActivatedRoute,
    public tipoUsuarioService:TipoUsuarioService,
    public activoService:ActivoService
  ) { }

  ngOnInit() {
    let params = this.activeRouter.params['_value'];
    this.id = params.id;
    console.log(this.id);
    this.getTipoUsuarioById();
    this.getListaActivo();
  }

  getTipoUsuarioById(){
    this.tipoUsuarioService.findById(""+this.id).subscribe(data=>{
      this.tipoUsuario = data;
      console.log(this.tipoUsuario);
    }, error=>{});
  }

  getListaActivo(){
    this.listaActivo=this.activoService.findAll();
  }

  update(){
    this.tipoUsuarioService.update(this.tipoUsuario).subscribe(data=>{
      this.showMsg=true;
      this.msg=data.mensaje;
      this.router.navigate(['/tipo-usuario-list']);
    }, error=>{
      this.showMsg=true;
      this.msg=error.error.mensaje;
    });
  }

}
