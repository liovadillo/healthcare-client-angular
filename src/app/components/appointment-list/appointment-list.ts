import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentDTO, AppointmentStatus } from '../../models/appointment/appointment.model';


@Component({
  selector: 'app-appointment-list',
  imports: [CommonModule],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css',
})
export class AppointmentList {

  @Input() appointments: AppointmentDTO[] = [];
  @Output() appointmentSelected = new EventEmitter<number>();
  AppointmentStatus = AppointmentStatus;

  onSelect(id: number): void {
    this.appointmentSelected.emit(id);
  }

}