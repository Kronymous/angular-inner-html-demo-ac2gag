import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //*****************************************************/
  //numeros
  evento: number | undefined;

  practica() {
    var x = 10;
    var y = 2;
    var resultado = x + y;

    this.evento = resultado;
    console.log(this.evento);
  }
  //***************************************************/
  //contador de numeros

  contador = 0;

  incrementar() {
    var x = 1;
    this.contador += x;
    console.log(this.contador);
  }
  //***************************************************/
  //Cadena de texto
  cadena: string | undefined;

  clave() {
    this.cadena = 'hola';
    console.log(this.cadena);
  }
  //***************************************************/
  //imprimir etiqueta
  cadena1: string | undefined;

  clave2() {
    this.cadena1 = '<h1>Hola<h1>';
    console.log(this.cadena1);
  }
  //***************************************************/
  //arreglo

  nombres: string[] = ['melon', 'sandia', 'uva', 'platano'];

  obtenerListaNombres(): string {
    let listaHTML = '<ul>';
    for (let i = 0; i < this.nombres.length; i++) {
      listaHTML += '<li>' + i + ' - ' + this.nombres[i] + '</li>';
    }
    listaHTML += '</ul>';
    return listaHTML;
  }
  //***************************************************/
  //arreglo diferente
  nombres1: string[] = ['carro', 'perro', 'silla', 'uva'];

  array() {
    const listaNombres = this.nombres1.map(
      (nombre1, index) => `${index} - ${nombre1}`
    );
    return `<ul><li>${listaNombres.join('<li>')}</li></ul>`;
  }
  //**************************************************** */
}
