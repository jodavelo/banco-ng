import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Activo } from 'src/app/domain/activo';
import { CuentaService } from 'src/app/service/cuenta.service';
import { ActivoService } from 'src/app/service/activo.service';
import { Cuenta } from 'src/app/domain/cuenta';

@Component({
  selector: 'app-cuenta-edit',
  templateUrl: './cuenta-edit.component.html',
  styleUrls: ['./cuenta-edit.component.css']
})
export class CuentaEditComponent implements OnInit {

  public id:string;
  public cuenta:Cuenta;

  public listaActivo:Activo[];

  public showMsg:boolean = false;
  public msg:string="";

  constructor(
    public router:Router,
    public activeRouter:ActivatedRoute,
    public cuentaService:CuentaService,
    public activoService:ActivoService
  ) { }

  ngOnInit() {

    let params = this.activeRouter.params['_value'];
    this.id = params.id;
    console.log(this.id);
    this.getCuentaById();

    this.getListaActivo();
  }

  getCuentaById(){
    this.cuentaService.findById(""+this.id).subscribe(data=>{
      this.cuenta = data;
      console.log(this.cuenta);
    },error=>{});
  }

  getListaActivo(){
    this.listaActivo=this.activoService.findAll();
  }

  update(){
    console.log(this.cuenta);
    this.cuentaService.update(this.cuenta).subscribe(data=>{
      this.showMsg=true;
      this.msg=data.mensaje;
    },error=>{
      this.showMsg=true;
      this.msg=error.error.mensaje;
    });
  }

}
