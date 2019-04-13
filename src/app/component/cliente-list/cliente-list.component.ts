import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  public listaClientes:Cliente[];

  //todo se inyecta por el constructor
  constructor(public clienteService:ClienteService) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes(){
    this.clienteService.findAll().subscribe(resultado=>{

      this.listaClientes=resultado;
    });
  }

}
