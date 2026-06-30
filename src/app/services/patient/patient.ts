import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreatePatientDTO, PatientDTO } from '../../models/patient/patient.model';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
    private apiUrl = `${environment.apiUrl}/patient`;

    constructor(private http: HttpClient){
    }

    getAll(): Observable<PatientDTO[]>{
        return this.http.get<PatientDTO[]>(this.apiUrl);
    }

    getById(id: number): Observable<PatientDTO>{
        return this.http.get<PatientDTO>(`${this.apiUrl}/${id}`);
    }

    create(dto: CreatePatientDTO): Observable<PatientDTO>{
        return this.http.post<PatientDTO>(this.apiUrl, dto);
    }

    update(id: number, dto: PatientDTO): Observable<PatientDTO>{
        return this.http.post<PatientDTO>(`${this.apiUrl}/${id}`, dto);
    }

    delete(id: number): Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/${id}`);        
    }

}
