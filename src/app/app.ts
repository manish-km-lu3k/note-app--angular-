import { Component } from '@angular/core';
import { NotesComponent } from './notes/notes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NotesComponent],
  template: `
    <app-notes></app-notes>
  `
})
export class AppComponent { }
