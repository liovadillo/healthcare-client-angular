import { Component } from '@angular/core';
import { AppointmentsContainer } from './components/appointments-container/appointments-container';

@Component({
  selector: 'app-root',
  imports: [AppointmentsContainer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'healthcare-client';
}