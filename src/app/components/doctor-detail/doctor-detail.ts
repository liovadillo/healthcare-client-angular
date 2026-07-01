import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorDTO } from '../../models/doctor/doctor.model';
import { DoctorService } from '../../services/doctor/doctor';

@Component({
  selector: 'app-doctor-detail',
  imports: [CommonModule],
  templateUrl: './doctor-detail.html',
  styleUrl: './doctor-detail.css',
})
export class DoctorDetail implements OnInit {

  doctor$: Observable<DoctorDTO> | null = null;
  showSuccess: boolean = false;
  showConfirmModal: boolean = false;  

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private router: Router
  ){}

  ngOnInit(): void {    
    this.showSuccess = this.route.snapshot.queryParamMap.get('created') === 'true';
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.doctor$ = this.doctorService.getById(id);
    
  }

  goBack(): void{
    this.router.navigate(['/doctors']);
  }

  onDelete(): void {
    this.showConfirmModal = true;
  }

  confirmDelete(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.doctorService.delete(id).subscribe({
      next: () => this.router.navigate(['/doctors'], { 
        queryParams: { deleted: true } 
      }),
      error: () => console.error('Error deleting doctor')
    });
  }
}
