import { NxWelcomeComponent } from './nx-welcome.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'analog-nx-repo-root',
  template: ` <analog-nx-repo-nx-welcome></analog-nx-repo-nx-welcome> `,
  styles: [],
})
export class AppComponent {
  title = 'analog-app';
}
