import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from 'src/app/domain/tipo-documento';
import { TipoDocumentoService } from 'src/app/service/tipo-documento.service';

@Component({
  selector: 'app-tipo-documento-list',
  templateUrl: './tipo-documento-list.component.html',
  styleUrls: ['./tipo-documento-list.component.css']
})
export class TipoDocumentoListComponent implements OnInit {

  public listaTiposDocumentos:TipoDocumento[];

  constructor(public tipoDocumentoService:TipoDocumentoService) { }

  ngOnInit() {
    this.getTiposDocumentos();
  }

  getTiposDocumentos(){
    this.tipoDocumentoService.findAll().subscribe(resultado=>{
      this.listaTiposDocumentos = resultado;
    })
  }

}
