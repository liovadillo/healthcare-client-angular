import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorDTO, CreateDoctorDTO, UpdateDoctorDTO  } from '../../models/doctor/doctor.model';

@Injectable({
    providedIn: 'root'
})

export class DoctorService {
    private apiUrl = `${environment.apiUrl}/doctor`;

    constructor(private http: HttpClient) {

    }

    getAll(): Observable<DoctorDTO[]> {
        return this.http.get<DoctorDTO[]>(this.apiUrl);
    }

    getById(id: number): Observable<DoctorDTO> {
        return this.http.get<DoctorDTO>(`${this.apiUrl}/${id}`);
    }

    create(dto: CreateDoctorDTO): Observable<DoctorDTO>{
        return this.http.post<DoctorDTO>(this.apiUrl ,dto);
    }

    update(id: number, dto: UpdateDoctorDTO): Observable<DoctorDTO>{
        return this.http.put<DoctorDTO>(`${this.apiUrl}/${id}`, dto);
    }

    delete(id: number): Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

}
