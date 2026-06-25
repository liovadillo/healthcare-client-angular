import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor/doctor';
import { Observable } from 'rxjs';
import { DoctorDTO } from '../../models/doctor/doctor.model';
import { CommonModule } from '@angular/common';
import { DoctorsList } from '../doctors-list/doctors-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors-container',
  imports: [CommonModule, DoctorsList],
  templateUrl: './doctors-container.html',
  styleUrl: './doctors-container.css',
})
export class DoctorsContainer implements OnInit {

  doctors: DoctorDTO[] = [];
  doctors$: Observable<DoctorDTO[]> | null = null; 
  errorMessage: string = '';


  constructor(
    private doctorService: DoctorService,
    private router: Router    
  ) { }

  ngOnInit(): void {
    this.doctors$ = this.doctorService.getAll();
  }

  onDoctorSelected(id: number): void {
    this.router.navigate(['/doctors', id]);
  }

}
