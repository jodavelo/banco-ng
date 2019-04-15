import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/domain/cuenta';
import { Activo } from 'src/app/domain/activo';
import { CuentaService } from 'src/app/service/cuenta.service';
import { ActivoService } from 'src/app/service/activo.service';

@Component({
  selector: 'app-cuenta-save',
  templateUrl: './cuenta-save.component.html',
  styleUrls: ['./cuenta-save.component.css']
})
export class CuentaSaveComponent implements OnInit {

  cuenta:Cuenta;
  listaCuenta:Cuenta[];
  listaActivo:Activo[];

  showMsg:boolean=false;
  msg:string="";

  constructor(
    public cuentaService:CuentaService,
    public activoService:ActivoService
  ) { }


  ngOnInit() {
    this.cuenta=new Cuenta("", "S", "", 0, 0);
    this.getListaActivo();
  }

  getListaActivo(){
    return this.listaActivo=this.activoService.findAll();
  }

  save(){
    console.log(this.cuenta);
    this.cuentaService.save(this.cuenta).subscribe(data=>{
      this.showMsg=true;
      this.msg=data.mensaje;
    }, error=>{
      this.showMsg=true,
      this.msg=error.error.mensaje;
    });
  }

}
