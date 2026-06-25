import { Routes } from '@angular/router';
import { AppointmentsContainer } from './components/appointments-container/appointments-container';
import { AppointmentDetail } from './components/appointment-detail/appointment-detail';
import { DoctorsContainer } from './components/doctors-container/doctors-container';

export const routes: Routes = [
  { path: '', redirectTo: 'appointments', pathMatch: 'full' },
  { path: 'appointments', component: AppointmentsContainer },
  { path: 'appointments/:id', component: AppointmentDetail },
  { path: 'doctors', component: DoctorsContainer },
];