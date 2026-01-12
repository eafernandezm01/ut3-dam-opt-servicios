import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios-service';
import { IUsuario } from '../../model/IUsuarios';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios-list',
  imports: [FormsModule],
  templateUrl: './usuarios-list.html',
  styleUrl: './usuarios-list.css',
})
export class UsuariosList implements OnInit{
  usuarios: IUsuario[] = [];

  nombre: string = '';
  email: string = '';

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar() {
    this.usuariosService.getUsuarios().subscribe((data) => (this.usuarios = data));
  }

  crear() {
    this.usuariosService
      .crearUsuario({ nombre: this.nombre, email: this.email })
      .subscribe(() => this.cargar());
  }

  borrar(id: number) {
    this.usuariosService.borrarUsuario(id).subscribe(() => this.cargar());
  }
}
