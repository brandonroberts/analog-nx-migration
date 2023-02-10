import { Component } from '@angular/core';
import { MyComponent } from '@analog-nx-repo/my-lib';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [MyComponent, RouterOutlet],
  selector: 'analog-nx-repo-root',
  template: ` <router-outlet/> `,
  styles: [],
})
export class AppComponent {
  title = 'analog-app';
}
