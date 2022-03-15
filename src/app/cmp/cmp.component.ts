import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.css']
})
export class CmpComponent {

  @Output()
  eventoDelete: EventEmitter<any> = new EventEmitter<any>()

  emitirEventoDelete(): void{
    this.eventoDelete.emit()

}
}