export interface Patient {
    id: string;
    name: string;
    age: number;
    gender: string;
    bloodPressure: BloodPressureRecord[];
    diagnosisHistory: DiagnosisRecord[];
    diagnosticList: DiagnosticRecord[];
    labResults: LabResult[];
    imageUrl?: string;
  }
  
  export interface BloodPressureRecord {
    year: number;
    systolic: number;
    diastolic: number;
  }
  
  export interface DiagnosisRecord {
    date: string;
    condition: string;
    status: string;
  }
  
  export interface DiagnosticRecord {
    date: string;
    test: string;
    result: string;
  }
  
  export interface LabResult {
    date: string;
    test: string;
    result: string;
    range: string;
  }