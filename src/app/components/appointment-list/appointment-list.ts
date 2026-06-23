import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentDTO } from '../../models/appointment/appointment.model';
import { AppointmentStatus } from '../../models/appointment/appointment.model';

@Component({
  selector: 'app-appointment-list',
  imports: [CommonModule],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css',
})
export class AppointmentList {

  @Input() appointments: AppointmentDTO[] = [];
  AppointmentStatus = AppointmentStatus;

}