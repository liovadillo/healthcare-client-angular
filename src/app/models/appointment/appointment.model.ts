import { DoctorSummaryDTO } from '../doctor/doctor.model';
import { PatientSummaryDTO } from '../patient/patient.model';

export enum AppointmentStatus {
    Scheduled = 0,
    Cancelled = 1,
    Confirmed = 2,
    Completed  = 3
}

export interface AppointmentDTO {
    id: number;
    doctorId: number;
    doctorName: string;
    patientId: number;
    patientName: string;
    startTime: Date;
    endTime: Date;
    status: AppointmentStatus;
    createdDate?: Date;   // <- el ? es nullable, igual que DateTime? en C#
    lastUpdatedDate?: Date;
}

export interface AppointmentDetailDTO {
    id: number;
    doctor: DoctorSummaryDTO;
    patient: PatientSummaryDTO;
    startTime: Date;
    endTime: Date;
    status: AppointmentStatus;
    createdDate?: Date;
    lastUpdatedDate?: Date;
}

export interface CreateAppointmentDTO{
    doctorId: number;
    patientId: number;
    startTime: Date;
    endTime: Date;
    status: AppointmentStatus;
}

export interface UpdateAppointmentDTO{
    doctorId: number;
    patientId: number;
    startTime: Date;
    endTime: Date;
}