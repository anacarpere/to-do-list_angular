import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Output()
  eventoPersonalizado: EventEmitter<any> = new EventEmitter<any>()

  emitirEventoPersonalizado(): void{
    this.eventoPersonalizado.emit()


}
}