import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor/doctor';
import { Observable } from 'rxjs';
import { DoctorDTO } from '../../models/doctor/doctor.model';
import { CommonModule } from '@angular/common';
import { DoctorsList } from '../doctors-list/doctors-list';
import { ActivatedRoute, Router } from '@angular/router';

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
  showDeleted: boolean = false;


  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private route: ActivatedRoute,    
  ) { }

  ngOnInit(): void {
    this.showDeleted = this.route.snapshot.queryParamMap.get('deleted') === 'true';
    this.doctors$ = this.doctorService.getAll();
  }

  onDoctorSelected(id: number): void {
    this.router.navigate(['/doctors', id]);
  }

  onCreate(): void{
    this.router.navigate(['/doctors/create']);
  }

}
