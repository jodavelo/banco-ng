import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from 'src/app/domain/tipo-documento';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoDocumentoService } from 'src/app/service/tipo-documento.service';
import { ActivoService } from 'src/app/service/activo.service';
import { Activo } from 'src/app/domain/activo';
import { delay } from 'q';

@Component({
  selector: 'app-tipo-documento-edit',
  templateUrl: './tipo-documento-edit.component.html',
  styleUrls: ['./tipo-documento-edit.component.css']
})
export class TipoDocumentoEditComponent implements OnInit {

  public id: number;
  public tipoDocumento: TipoDocumento;

  public listaActivo: Activo[];

  public showMsg: boolean;
  public msg = "";

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public tipoDocumentoService: TipoDocumentoService,
    public activoService: ActivoService
  ) { }

  ngOnInit() {
    let params = this.activeRouter.params['_value'];
    this.id = params.id;
    console.log(this.id);
    this.getTipoDocumentoById();
    this.getListaActivo();
  }

  getTipoDocumentoById() {
    this.tipoDocumentoService.findById("" + this.id).subscribe(data => {
      this.tipoDocumento = data;
      console.log(this.tipoDocumento);
    }, error => { });
  }

  getListaActivo() {
    this.listaActivo = this.activoService.findAll();
  }

  update() {
    this.tipoDocumentoService.update(this.tipoDocumento).subscribe(data => {
      this.showMsg = true;
      this.msg = data.mensaje;
      this.router.navigate(['tipo-documento-list']);
    }, error => {
      this.showMsg = true;
      this.msg = error.error.mensaje;
    });
  }

}
