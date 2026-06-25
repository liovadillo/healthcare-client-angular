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

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.doctor$ = this.doctorService.getById(id);
  }

  goBack(): void{
    this.router.navigate(['/doctors']);
  }

}
