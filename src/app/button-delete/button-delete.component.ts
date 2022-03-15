import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.css']
})
export class ButtonDeleteComponent {

  @Output()
  eventDeleteAll: EventEmitter<any> = new EventEmitter<any>()

  emitirEventoPersonalizado(): void{
    this.eventDeleteAll.emit()


}
}
