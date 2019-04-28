import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/domain/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  public listaUsuarios:Usuario[];

  constructor(public usuarioService:UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.findAll().subscribe(resultado=>{
      this.listaUsuarios=resultado;
    })
  }

  delete(usuario:Usuario){
    this.usuarioService.delete(usuario.usuUsuario).subscribe(data=>{
      console.log(data.mensaje);
      this.getUsuarios();
    }, error=>{
      console.log(error.error.mensaje);
    });
  }

}
