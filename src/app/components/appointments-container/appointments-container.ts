import { Component, OnInit } from '@angular/core';
import { AppointmentDTO } from '../../models/appointment/appointment.model';
import { AppointmentService } from '../../services/appointment/appointment';
import { AppointmentList } from '../appointment-list/appointment-list';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments-container',
  imports: [CommonModule, AppointmentList],
  templateUrl: './appointments-container.html',
  styleUrl: './appointments-container.css',
})
export class AppointmentsContainer implements OnInit {

  appointments: AppointmentDTO[] = [];
  appointments$: Observable<AppointmentDTO[]> | null = null;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private appointmentService: AppointmentService,
    private router: Router   
  ) {}

  ngOnInit(): void {    
    this.appointments$ = this.appointmentService.getAll();
  }

  onAppointmentSelected(id: number): void {
    this.router.navigate(['/appointments', id]);
  }

}