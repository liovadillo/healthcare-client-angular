import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../../services/appointment/appointment';
import { AppointmentDetailDTO, AppointmentStatus } from '../../models/appointment/appointment.model';
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
  AppointmentStatus = AppointmentStatus;

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.appointment$ = this.appointmentService.getById(id);
  }

  goBack(): void {
    this.router.navigate(['/appointments']);
  }
  
}