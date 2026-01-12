import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../services/observable-service';

@Component({
  selector: 'app-observable-prueba',
  imports: [],
  templateUrl: './observable-prueba.html',
  styleUrl: './observable-prueba.css',
})
export class ObservablePrueba implements OnInit{
  constructor(private obs: ObservableService) {}

  datosMensaje1!: string;
  datosMensaje2: string [] = [];
  datosMensaje3!: string;

  ngOnInit(): void {
    this.obs.getMensaje().subscribe((data) => {
      console.log('Observable con of');
      this.datosMensaje1 = data;
    });
    this.obs.getMensaje2().subscribe((data) => {
      console.log('Observable con next');
       this.datosMensaje2.push(data);
    });
    this.obs.getMensaje3().subscribe((data) => {
      console.log('Observable con timeOut');
       this.datosMensaje3 = data;
    });
  }
}
