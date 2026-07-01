import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../services/doctor/doctor';
import { Observable } from 'rxjs';
import { DoctorDTO } from '../../models/doctor/doctor.model';
import { DoctorForm } from '../doctor-form/doctor-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-form-container',
  imports: [CommonModule, DoctorForm],
  templateUrl: './doctor-form-container.html',
  styleUrl: './doctor-form-container.css',
})
export class DoctorFormContainer implements OnInit{

  doctor$: Observable<DoctorDTO> | null = null;

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
    this.doctor$ = this.doctorService.getById(id);
    }
  }

}
