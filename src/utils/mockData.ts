import type { Patient } from '../types';

const patientsList = [
  {
    id: "1",
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    id: "2",
    name: "Ryan Johnson",
    gender: "Male",
    age: 45,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  },
  {
    id: "3",
    name: "Brandon Mitchell",
    gender: "Male",
    age: 36,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    id: "4",
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    id: "5",
    name: "Samantha Johnson",
    gender: "Female",
    age: 56,
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
  },
  {
    id: "6",
    name: "Ashley Martinez",
    gender: "Female",
    age: 54,
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop"
  }
];

export const mockPatientData: Patient = {
  id: "4",
  name: "Jessica Taylor",
  age: 28,
  gender: "Female",
  bloodPressure: [
    { year: 2019, systolic: 120, diastolic: 80 },
    { year: 2020, systolic: 122, diastolic: 82 },
    { year: 2021, systolic: 118, diastolic: 79 },
    { year: 2022, systolic: 121, diastolic: 81 },
    { year: 2023, systolic: 119, diastolic: 80 }
  ],
  diagnosisHistory: [
    {
      date: "2023-12-15",
      condition: "Hypertension",
      status: "Active"
    },
    {
      date: "2023-10-01",
      condition: "Type 2 Diabetes",
      status: "Active"
    },
    {
      date: "2023-05-20",
      condition: "Bronchitis",
      status: "Resolved"
    },
    {
      date: "2023-02-10",
      condition: "Migraine",
      status: "Active"
    }
  ],
  diagnosticList: [
    {
      date: "2023-12-15",
      test: "Blood Pressure Check",
      result: "140/90 mmHg"
    },
    {
      date: "2023-12-01",
      test: "HbA1c",
      result: "6.5%"
    },
    {
      date: "2023-11-15",
      test: "Lipid Panel",
      result: "Normal"
    }
  ],
  labResults: [
    {
      date: "2023-12-15",
      test: "Complete Blood Count",
      result: "Normal",
      range: "4.5-11.0 K/uL"
    },
    {
      date: "2023-12-01",
      test: "Comprehensive Metabolic Panel",
      result: "Normal",
      range: "Multiple ranges"
    },
    {
      date: "2023-11-15",
      test: "Thyroid Function",
      result: "3.2",
      range: "0.4-4.0 mIU/L"
    }
  ]
};

export { patientsList };