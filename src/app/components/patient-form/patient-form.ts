import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { PatientService } from '../../services/patient/patient';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatePatientDTO, PatientDTO } from '../../models/patient/patient.model';

@Component({
  selector: 'app-patient-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './patient-form.html',
  styleUrl: './patient-form.css',
})
export class PatientForm implements OnInit {

  @Input() initialData: any = null;
  patientForm!: FormGroup;

  constructor(
    private location: Location,
    private patientService: PatientService,
    private router: Router,
    private fb: FormBuilder
  ){};

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      name:[this.initialData?.name ?? '', Validators.required],
      dateOfBirth:[this.initialData?.dateOfBirth ?? '', Validators.required],
      age: [this.initialData?.age ?? ''],
      diagnosis: [this.initialData?.diagnosis ?? ''],
      isActive: [this.initialData?.isActive ?? true]    
    });
  }
  
  onSubmit(): void {
    if (this.patientForm.valid) {
      const dto: CreatePatientDTO = this.patientForm.value;
      this.patientService.create(dto).subscribe({
        next: (patient: PatientDTO) => {
          this.router.navigate(['/patients', patient.id], {
            queryParams: { created: true }
          });
        },
        error: () => console.log('Error')
      });
    }
  }
  
  goBack(): void{
    this.location.back();
  }
}
