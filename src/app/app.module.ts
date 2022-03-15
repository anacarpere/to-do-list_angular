import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CmpComponent } from './cmp/cmp.component';
import { MaterialModule } from './material.module';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { ButtonDeleteComponent } from './button-delete/button-delete.component';
import { StyledInputDirective } from './styled-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    CmpComponent,
    InputComponent,
    ButtonComponent,
    ButtonDeleteComponent,
    StyledInputDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
