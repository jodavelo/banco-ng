import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/domain/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente: Cliente;
  showMsg: boolean = false;
  msg: string = "";

  constructor(
    public clienteService: ClienteService
  ) { }

  ngOnInit() {
  }

  delete() {
    console.log(this.cliente);
    this.clienteService.delete(this.cliente).subscribe(data => {
      this.showMsg = true;
      this.msg = data.mensaje;
    }, error => {
      this.showMsg = true;
      this.msg = error.error.mensaje;
    });
  }

}
