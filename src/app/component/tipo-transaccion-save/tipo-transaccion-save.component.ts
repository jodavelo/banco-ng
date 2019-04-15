import { Component, OnInit } from '@angular/core';
import { TipoTransaccion } from 'src/app/domain/tipo-transaccion';
import { Activo } from 'src/app/domain/activo';
import { TipoTransaccionService } from 'src/app/service/tipo-transaccion.service';
import { ActivoService } from 'src/app/service/activo.service';

@Component({
  selector: 'app-tipo-transaccion-save',
  templateUrl: './tipo-transaccion-save.component.html',
  styleUrls: ['./tipo-transaccion-save.component.css']
})
export class TipoTransaccionSaveComponent implements OnInit {

  tipoTransaccion:TipoTransaccion;
  listaTipoTransaccion:TipoTransaccion[];
  listaActivo:Activo[];

  showMsg:boolean = false;
  msg:string="";

  constructor(
    public tipoTransaccionService:TipoTransaccionService,
    public activoService:ActivoService
  ) { }

  ngOnInit() {
    this.tipoTransaccion = new TipoTransaccion(null, "S", "");
    this.getListaActivo();
  }

  getListaActivo(){
    this.listaActivo=this.activoService.findAll();
  }

  save(){
    console.log(this.tipoTransaccion);
    this.tipoTransaccionService.save(this.tipoTransaccion).subscribe(data=>{
      this.showMsg=true,
      this.msg=data.mensaje;
    }, error=>{
      this.showMsg=true,
      this.msg=error.error.mensaje;
    });
  }

  

}
