import { Component, ViewChild, ElementRef } from '@angular/core';
import  {Preguntas}  from '../models/preguntas';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  @ViewChild('option', { static: true }) option: ElementRef<HTMLInputElement> | undefined;
  arrPreguntas: Preguntas []= [];

  constructor() {

    this.llenarPrguntas();
    console.log(this.arrPreguntas);

    this.recorrerPreguntas();

  }


   llenarPrguntas(){
    this.arrPreguntas.push(
      {
        id: 1,
        pregunta: "¿Como te llamas?"
      },
      {
        id: 2,
        pregunta: "¿Como te llamas 2 ?"
      },
      {
        id: 3,
        pregunta: "¿Como te llamas? 3"
      },
    );
   }

   recorrerPreguntas(){
    this.arrPreguntas.forEach(pregunta => {
      console.log(pregunta);

    });
   }

   nextQuestion(){

   }

   loadQuestion(){

   }

   activateButton(){

   }

   saveAnswer(){
    let i:number;
      for( i=0;i<10;i++){
        if(this.option.checked){

        }
      }

   }

   clearAnswer(){

   }

  }


