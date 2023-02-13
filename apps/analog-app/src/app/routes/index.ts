import { Component } from '@angular/core';
import { MyComponent } from '@analog-nx-repo/my-lib';

@Component({
  standalone: true,
  template: ` home works <my-component></my-component>`,
  imports:  [MyComponent],
  styles: [],
})
export default class HomeComponent {}
