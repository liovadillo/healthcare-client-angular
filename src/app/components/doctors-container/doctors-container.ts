import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor/doctor';
import { Observable } from 'rxjs';
import { DoctorDTO } from '../../models/doctor/doctor.model';
import { CommonModule } from '@angular/common';
import { DoctorsList } from '../doctors-list/doctors-list';

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
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    this.doctors$ = this.doctorService.getAll();
  }

}
