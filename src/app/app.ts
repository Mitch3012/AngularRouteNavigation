import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Location } from '@angular/common';
import { Students } from './students/studentsComponent';

@Component({
  selector: 'app-root',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private location = inject(Location);
  protected readonly title = signal('router-app');
  goBack() {
    this.location.back();
  }

}
