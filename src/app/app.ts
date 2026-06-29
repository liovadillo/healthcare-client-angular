import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavSidebar } from './components/nav-sidebar/nav-sidebar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'healthcare-client';
}