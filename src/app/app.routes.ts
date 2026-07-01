import { Routes } from '@angular/router';
import { AppointmentsContainer } from './components/appointments-container/appointments-container';
import { AppointmentDetail } from './components/appointment-detail/appointment-detail';
import { DoctorsContainer } from './components/doctors-container/doctors-container';
import { DoctorDetail } from './components/doctor-detail/doctor-detail';
import { PatientContainer } from './components/patient-container/patient-container';
import { PatientDetail } from './components/patient-detail/patient-detail';
import { DoctorForm } from './components/doctor-form/doctor-form';
import { PatientForm } from './components/patient-form/patient-form';
import { DoctorFormContainer } from './components/doctor-form-container/doctor-form-container';

export const routes: Routes = [
  { path: '', redirectTo: 'appointments', pathMatch: 'full' },
  { path: 'appointments', component: AppointmentsContainer },
  { path: 'appointments/:id', component: AppointmentDetail },
  { path: 'doctors', component: DoctorsContainer },
  { path: 'doctors/create', component: DoctorFormContainer },
  { path: 'doctors/:id', component: DoctorDetail },
  { path: 'doctors/:id/edit', component: DoctorFormContainer  },
  { path: 'patients', component: PatientContainer },
  { path: 'patients/create', component: PatientForm },
  { path: 'patients/:id', component: PatientDetail },
 
];