import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient/patient';
import { Observable } from 'rxjs';
import { PatientDTO } from '../../models/patient/patient.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-detail',
  imports: [CommonModule],
  templateUrl: './patient-detail.html',
  styleUrl: './patient-detail.css',
})
export class PatientDetail implements OnInit {

  patient$: Observable<PatientDTO> | null = null;
  showSuccess: boolean = false;
  
  constructor(
    private router: Router,
    private patientService: PatientService,
    private route: ActivatedRoute
  ){} 

  ngOnInit(): void {
    this.showSuccess = this.route.snapshot.queryParamMap.get('created') === 'true';
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.patient$ = this.patientService.getById(id);
  }

  goBack(): void{
    this.router.navigate(['/patients']);
  }

}
