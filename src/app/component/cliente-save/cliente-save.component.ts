import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/domain/cliente';
import { TipoDocumento } from 'src/app/domain/tipo-documento';
import { Activo } from 'src/app/domain/activo';
import { ClienteService } from 'src/app/service/cliente.service';
import { ActivoService } from 'src/app/service/activo.service';
import { TipoDocumentoService } from 'src/app/service/tipo-documento.service';

@Component({
  selector: 'app-cliente-save',
  templateUrl: './cliente-save.component.html',
  styleUrls: ['./cliente-save.component.css']
})
export class ClienteSaveComponent implements OnInit {

  cliente:Cliente;
  listaTipoDocumento:TipoDocumento[];
  listaActivo:Activo[];

  showMsg:boolean=false;
  msg:string="";

  constructor(public clienteService:ClienteService,
              public tipoDocumentoService:TipoDocumentoService,
              public activoService:ActivoService
    ) { }

  ngOnInit() {
    this.cliente = new Cliente(0, "S", "", "", "", "", 1);
    this.getListaActivo();
    this.getListaTipoDocumento();
  }

  getListaTipoDocumento(){
    this.tipoDocumentoService.findAll().subscribe(resultado=>{
      this.listaTipoDocumento=resultado;
    });
  }

  getListaActivo(){
    this.listaActivo=this.activoService.findAll();
  }

  save(){
    console.log(this.cliente);
    this.clienteService.save(this.cliente).subscribe(data=>{
      this.showMsg=true,
      this.msg=data.mensaje;
    }, error=>{
      this.showMsg=true,
      this.msg=error.error.mensaje;
    });
  }

}
