import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient/patient';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientDTO } from '../../models/patient/patient.model';
import { CommonModule } from '@angular/common';
import { PatientList } from '../patient-list/patient-list';

@Component({
  selector: 'app-patient-container',
  imports: [CommonModule, PatientList],
  templateUrl: './patient-container.html',
  styleUrl: './patient-container.css',
})
export class PatientContainer implements OnInit {

  patients$: Observable<PatientDTO[]> | null = null;
  errorMessage: string = '';

  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.patients$ = this.patientService.getAll();
  }

  onPatientSelected(id:number): void{
    this.router.navigate(['/patients', id]);
  }

}
