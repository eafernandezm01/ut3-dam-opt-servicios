import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../model/IUsuarios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000';

  getUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(`${this.baseUrl}/usuarios`);
  }

  getUsuario(id: number): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${this.baseUrl}/usuarios/${id}`);
  }

  crearUsuario(data: any): Observable<IUsuario> {
    return this.http.post<IUsuario>(`${this.baseUrl}/usuarios`, data);
  }

  actualizarUsuario(id: number, data: any): Observable<IUsuario> {
    return this.http.put<IUsuario>(`${this.baseUrl}/usuarios/${id}`, data);
  }

  borrarUsuario(id: number): Observable<{ mensaje: string }> {
    return this.http.delete<{ mensaje: string }>(`${this.baseUrl}/usuarios/${id}`);
  }
}
