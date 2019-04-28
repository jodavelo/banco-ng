import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/domain/cuenta';
import { CuentaService } from 'src/app/service/cuenta.service';

@Component({
  selector: 'app-cuenta-list',
  templateUrl: './cuenta-list.component.html',
  styleUrls: ['./cuenta-list.component.css']
})
export class CuentaListComponent implements OnInit {

  public listaCuentas:Cuenta[];

  constructor(public cuentaService:CuentaService) { }

  ngOnInit() {
    this.getCuentas();
  }

  getCuentas(){
    this.cuentaService.findAll().subscribe(resultado=>{
      this.listaCuentas = resultado;
    })
  }

  delete(cuenta:Cuenta){
    this.cuentaService.delete(""+cuenta.cuenId).subscribe(data=>{
      console.log(data.mensaje);
      this.getCuentas;
    }, error=>{
      console.log(error.error.mensaje);
    });
  }

}
