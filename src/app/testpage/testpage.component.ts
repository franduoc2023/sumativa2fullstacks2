import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testpage.component.html',
  styleUrl: './testpage.component.css'
})
export class TestpageComponent  {
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
