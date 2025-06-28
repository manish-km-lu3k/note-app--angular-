import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.html',
  styleUrls: ['./notes.css']
})
export class NotesComponent implements OnInit {
  noteText: string = '';
  notes: string[] = [];

  ngOnInit(): void {
    const saved = sessionStorage.getItem('notes');
    if (saved) {
      this.notes = JSON.parse(saved);
    }
  }

  saveNotes(): void {
    sessionStorage.setItem('notes', JSON.stringify(this.notes));
  }

  addNote(): void {
    if (this.noteText.length > 0) {
      this.notes.push(this.noteText);
      this.noteText = '';
      this.saveNotes();
    }
  }

  deleteNote(index: number): void {
    this.notes.splice(index, 1);
    this.saveNotes();
  }
}
