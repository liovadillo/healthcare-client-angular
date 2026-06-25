export interface DoctorSummaryDTO {
    id: number;
    name: string;
    specialty: string;
}

export interface DoctorDTO {
    id: number;
    name: string;
    specialty: string;
    isAvailable: boolean;
    yearsOfExperience: number;
}

export interface CreateDoctorDTO {
    name: string;
    specialty: string;
    isAvailable: boolean;
    yearsOfExperience: number;
}

export interface UpdateDoctorDTO {
    name: string;
    specialty: string;
    isAvailable: boolean;
    yearsOfExperience: number;
}