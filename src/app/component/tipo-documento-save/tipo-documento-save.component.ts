import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from 'src/app/domain/tipo-documento';
import { Activo } from 'src/app/domain/activo';
import { TipoDocumentoService } from 'src/app/service/tipo-documento.service';
import { ActivoService } from 'src/app/service/activo.service';

@Component({
  selector: 'app-tipo-documento-save',
  templateUrl: './tipo-documento-save.component.html',
  styleUrls: ['./tipo-documento-save.component.css']
})
export class TipoDocumentoSaveComponent implements OnInit {

  tipoDocumento:TipoDocumento;
  listaTipoDocumento:TipoDocumento[];
  listaActivo:Activo[];

  showMsg:boolean=false;
  msg:string="";

  constructor(
    public tipoDocumentoService:TipoDocumentoService,
    public activoService:ActivoService
  ) { }


  ngOnInit() {
    this.tipoDocumento = new TipoDocumento(null, "S", "");
    this.getListaActivo();
  }

  getListaActivo(){
    this.listaActivo=this.activoService.findAll();
  }

  save(){
    console.log(this.tipoDocumento);
    this.tipoDocumentoService.save(this.tipoDocumento).subscribe(data=>{
      this.showMsg=true,
      this.msg=data.mensaje;
      console.log(data.mensage);
    }, error=>{
      this.showMsg=true,
      this.msg=error.error.mensage;
    });
  }

}
