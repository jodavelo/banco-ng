import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/domain/cliente';
import { TipoDocumentoService } from 'src/app/service/tipo-documento.service';
import { ActivoService } from 'src/app/service/activo.service';
import { TipoDocumento } from 'src/app/domain/tipo-documento';
import { Activo } from 'src/app/domain/activo';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  public id:number;
  public cliente:Cliente;

  public listaTipoDocumento:TipoDocumento[];
  public listaActivo:Activo[];

  public showMsg:boolean=false;
  public msg:string="";

  constructor(
    public router:Router,
    public activeRouter:ActivatedRoute,
    public clienteService:ClienteService,
    public tipoDocumentoService:TipoDocumentoService,
    public activoService:ActivoService
  ) { }

  ngOnInit() {
    let params = this.activeRouter.params['_value'];
    this.id = params.id;
    console.log(this.id);
    this.getClienteById();

    this.getListaTipoDocumento();
    this.getListaActivo();
  }

  getClienteById(){
    this.clienteService.findById(""+this.id).subscribe(data=>{
      this.cliente = data;
      console.log(this.cliente);
    }, error=>{});
  }

  getListaTipoDocumento(){
    this.tipoDocumentoService.findAll().subscribe(resultado=>{
      this.listaTipoDocumento=resultado;
    });
  }

  getListaActivo(){
    this.listaActivo=this.activoService.findAll();
  }

  update(){
    console.log(this.cliente);
    this.clienteService.update(this.cliente).subscribe(data=>{
      this.showMsg=true,
      this.msg=data.mensaje;
    }, error=>{
      this.showMsg=true,
      this.msg=error.error.mensaje;
    });
  }

}
