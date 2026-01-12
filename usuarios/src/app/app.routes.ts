import { Routes } from '@angular/router';
import { UsuariosList } from './pages/usuarios-list/usuarios-list';
import { ObservablePrueba } from './observable-prueba/observable-prueba';

export const routes: Routes = [
  { path: 'usuariosList', component: UsuariosList },
  { path: 'obs', component: ObservablePrueba },
  { path: '', redirectTo: 'usuariosList', pathMatch: 'full' },
];
