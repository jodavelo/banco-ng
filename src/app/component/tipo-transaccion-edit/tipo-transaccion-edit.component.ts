import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoTransaccion } from 'src/app/domain/tipo-transaccion';
import { Activo } from 'src/app/domain/activo';
import { TipoTransaccionService } from 'src/app/service/tipo-transaccion.service';
import { ActivoService } from 'src/app/service/activo.service';

@Component({
  selector: 'app-tipo-transaccion-edit',
  templateUrl: './tipo-transaccion-edit.component.html',
  styleUrls: ['./tipo-transaccion-edit.component.css']
})
export class TipoTransaccionEditComponent implements OnInit {

  public id:number;
  public tipoTransaccion:TipoTransaccion;

  public listaActivo:Activo[];

  public showMsg:boolean;
  public msg:string="";

  constructor(
    public router:Router,
    public activeRouter:ActivatedRoute,
    public tipoTransaccionService:TipoTransaccionService,
    public activoService:ActivoService
  ) { }

  ngOnInit() {
    let params = this.activeRouter.params['_value'];
    this.id = params.id;
    console.log(this.id);
    this.getTipoTransaccionById();
    this.getListaActivo();
  }

  getListaActivo(){
    this.listaActivo = this.activoService.findAll();
  }

  getTipoTransaccionById(){
    this.tipoTransaccionService.findById(""+this.id).subscribe(data=>{
      this.tipoTransaccion = data;
      console.log(this.tipoTransaccion);
    }, error=>{});
  }

  update(){
    this.tipoTransaccionService.update(this.tipoTransaccion).subscribe(data=>{
      this.showMsg=true;
      this.msg=data.mensaje;
      this.router.navigate(['/tipo-transaccion-list']);
    }, error=>{
      this.showMsg=true;
      this.msg=error.error.mensaje;
    });
  }

}
