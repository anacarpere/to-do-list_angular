import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project_todo';
  atividades: Array<string> = ['aula de inglês' , 'almoço' , 'tomar água', 'pagar boleto']

  @ViewChild('inputAluno')
  input!: ElementRef

  adicionarNome(valor:string): void {
    this.atividades.push(valor)
    this.input.nativeElement.value =''
  }

}
