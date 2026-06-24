import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../services/appointment/appointment';
import { AppointmentDetailDTO } from '../../models/appointment/appointment.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointment-detail',
  imports: [CommonModule],
  templateUrl: './appointment-detail.html',
  styleUrl: './appointment-detail.css',
})
export class AppointmentDetail implements OnInit {

  appointment$: Observable<AppointmentDetailDTO> | null = null;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.appointment$ = this.appointmentService.getById(id);
  }
}