import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDTO } from '../../models/doctor/doctor.model';


@Component({
  selector: 'app-doctors-list',
  imports: [CommonModule],
  templateUrl: './doctors-list.html',
  styleUrl: './doctors-list.css',
})
export class DoctorsList {

  @Input() doctors: DoctorDTO[] = [];

}
