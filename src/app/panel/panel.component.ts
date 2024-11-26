import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  progreso: number = 20;
  indiceActual = 0; 


   seleccionarPestana(indiceActual: number): void {
     this.indiceActual = indiceActual;
  }

   paginaSiguiente(): void {
    if (this.indiceActual < 2) {
      this.indiceActual++;
    }
  }

   paginaAnterior(): void {
    if (this.indiceActual > 0) {
      this.indiceActual--;
    }
  }

aumentarProgreso():void {
if (this.progreso <100){

  this.progreso +=20;
}

}
disminuirProgreso():void {
if (this.progreso >0){
  this.progreso -= 20;

}


}


// <progress [value]="progreso" max="100"></progress>//


  
}
