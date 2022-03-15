import { Component, ElementRef, ViewChild, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'project_todo';
  
  atividades: Array<string>  = ['aula de inglês' , 'almoço' , 'tomar água', 'pagar boleto']

  mostrarParagrafo: boolean= false

  @Input()
  arr: string | null  = ''
 

  @ViewChild('inputAtividade')
  input!: ElementRef

  adicionarNome(valor:string): void {
    this.atividades.push(valor)
    this.input.nativeElement.value =''
    localStorage.setItem('chave', JSON.stringify(this.atividades))   
  }

  

  deletarNome(valor:number, remove:number): void {
    this.atividades.splice(valor, remove)
  }

  deletarTudo(valor:number, remove:number): void {
    this.atividades.splice(valor, remove)
  }

  ngOnInit(): void {
    this.arr = localStorage.getItem('chave')

    if(this.arr){
      this.atividades = JSON.parse(this.arr)
    }
    console.log(this.atividades)
  }
  
}




