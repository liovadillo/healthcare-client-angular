import { Component, Input, OnInit } from '@angular/core';
import { CreateDoctorDTO, DoctorDTO } from '../../models/doctor/doctor.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { DoctorService } from '../../services/doctor/doctor';
import { Router } from '@angular/router';
import { DoctorDetail } from '../doctor-detail/doctor-detail';

@Component({
  selector: 'app-doctor-form',
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './doctor-form.html',
  styleUrl: './doctor-form.css',
})
export class DoctorForm implements OnInit {
  
  @Input() initialData: any = null;
  doctorForm!: FormGroup;  

  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService,
    private router: Router,
    private location: Location    
  ){ };

  ngOnInit(): void {     
    this.doctorForm = this.fb.group({
      name:[this.initialData?.name ?? '', Validators.required],
      specialty: [this.initialData?.specialty ?? '', Validators.required],
      isAvailable: [this.initialData?.isAvailable ?? true],
      yearsOfExperience: [this.initialData?.yearsOfExperience ?? 0, Validators.required]      
    });
  }

  onSubmit(): void{
    if(this.doctorForm.valid){
      console.log('next ejecutado');
      const dto: CreateDoctorDTO = this.doctorForm.value;
      this.doctorService.create(dto).subscribe({
        next: (doctor: DoctorDTO) => {
        this.router.navigate(['/doctors', doctor.id], { 
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
