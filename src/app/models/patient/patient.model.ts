export interface PatientSummaryDTO {
    id: number;
    name: string;
    age: number;
    diagnosis: string;
    dateOfBirth: Date;
}

export interface CreatePatientDTO {
    name: string;
    age: number;
    diagnosis: string;
    isActive: boolean;
    dateOfBirth: Date;
}

export interface PatientDTO {
    id: number;
    name: string;
    age: number;
    diagnosis: string;
    isActive: boolean;
    dateOfBirth: Date;
}

export interface UpdatePatientDTO {
    name: string;
    age: number;
    diagnosis: string;
    isActive: boolean;
    dateOfBirth: Date;
}
