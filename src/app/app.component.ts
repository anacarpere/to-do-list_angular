import { Component, ElementRef, ViewChild, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'project_todo';
  
  atividades: string[] | null  = []


  @ViewChild('inputAtividade')
  input!: ElementRef

  ngOnInit(): void {
    this.acessarLocalStorage()
  }

  incluirAtividade(valor: string): void{
    this.atividades?.push(valor)
    let atividadeEmString = JSON.stringify(this.atividades) //transformando array em string
    console.log(`variavel atividadeEmString: ${atividadeEmString} ${typeof(atividadeEmString)}`)
    localStorage.setItem('chave', atividadeEmString) // criando o storage e incluindo dados 
    this.acessarLocalStorage() // função que passa dados para a array que aparece na tela, ela será repetida a cada novo input inserido 
    this.input.nativeElement.value = ""
  }

  acessarLocalStorage(): void {
    let storage = localStorage.getItem('chave') // recupera os dados que estão no Storage (em string)
    console.log(`variavel storage ${storage} ${typeof(storage)} `)
    let arr = JSON.parse(storage || '[]') // transforma os dados (ainda em string e transforma em um objeto)
    console.log(`variavel arr ${arr} ${typeof(arr)} `)
    this.atividades = arr // passa o objeto para o array de atividades que irá aparecer na tela com o ngfor
  }

  deletarAtividade(index: number, remove: number): void {
    this.atividades?.splice(index, remove)
    
    let atividadeEmString = JSON.stringify(this.atividades)
    localStorage.setItem('chave', atividadeEmString)
    this.acessarLocalStorage()
  }

  deletarTudo(index:number):void {
    this.atividades?.splice(index, this.atividades.length)

    let atividadeEmString = JSON.stringify(this.atividades)
    localStorage.setItem('chave',atividadeEmString)
    this.acessarLocalStorage()
  }

  
}




