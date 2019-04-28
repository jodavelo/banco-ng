import { Component, OnInit } from '@angular/core';
import { TipoTransaccion } from 'src/app/domain/tipo-transaccion';
import { TipoTransaccionService } from 'src/app/service/tipo-transaccion.service';

@Component({
  selector: 'app-tipo-transaccion-list',
  templateUrl: './tipo-transaccion-list.component.html',
  styleUrls: ['./tipo-transaccion-list.component.css']
})
export class TipoTransaccionListComponent implements OnInit {

  public id:number;

  public listaTipoTransacciones:TipoTransaccion[];

  constructor(
    public tipoTransaccionService:TipoTransaccionService
  ) { }

  ngOnInit() {
    this.getTipoTransacciones();
  }

  getTipoTransacciones(){
    this.tipoTransaccionService.findAll().subscribe(resultado=>{
      this.listaTipoTransacciones = resultado;
    });
  }

  delete(tipoTransaccion:TipoTransaccion){
    this.tipoTransaccionService.delete(""+tipoTransaccion.titrId).subscribe(data=>{
      console.log(data.mensaje);
      this.getTipoTransacciones();
    }, error=>{
      console.log(error.error.mensaje);
    });
  }

}
