import { Component, OnInit } from '@angular/core';
import { TipoUsuario } from 'src/app/domain/tipo-usuario';
import { TipoUsuarioService } from 'src/app/service/tipo-usuario.service';

@Component({
  selector: 'app-tipo-usuario-list',
  templateUrl: './tipo-usuario-list.component.html',
  styleUrls: ['./tipo-usuario-list.component.css']
})
export class TipoUsuarioListComponent implements OnInit {

  public listaTipoUsuarios:TipoUsuario[];

  constructor(public tipoUsuarioService:TipoUsuarioService) { }

  ngOnInit() {
    this.getTipoUsuario();
  }

  getTipoUsuario(){
    this.tipoUsuarioService.findAll().subscribe(resultado=>{
      this.listaTipoUsuarios = resultado;
    })
  }

}
