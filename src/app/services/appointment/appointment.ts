import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppointmentDTO, AppointmentDetailDTO, CreateAppointmentDTO, UpdateAppointmentDTO } from '../../models/appointment/appointment.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = `${environment.apiUrl}/appointment`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<AppointmentDTO[]> {
    return this.http.get<AppointmentDTO[]>(this.apiUrl);
  }

  getById(id: number): Observable<AppointmentDetailDTO> {
    return this.http.get<AppointmentDetailDTO>(`${this.apiUrl}/${id}`);
  }

  create(dto: CreateAppointmentDTO): Observable<AppointmentDetailDTO> {
    return this.http.post<AppointmentDetailDTO>(this.apiUrl, dto);
  }

  update(id: number, dto: UpdateAppointmentDTO): Observable<AppointmentDetailDTO> {
    return this.http.put<AppointmentDetailDTO>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}