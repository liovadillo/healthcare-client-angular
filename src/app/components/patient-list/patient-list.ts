import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PatientDTO } from '../../models/patient/patient.model';

@Component({
  selector: 'app-patient-list',
  imports: [CommonModule],
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.css',
})
export class PatientList {

@Input() patients: PatientDTO[] = [];

}
