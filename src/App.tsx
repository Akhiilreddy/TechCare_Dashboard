import { useState } from 'react';
import { PatientsList } from './components/PatientsList';
import { PatientInfo } from './components/PatientInfo';
import { BloodPressureChart } from './components/BPChart';
import { DiagnosticList } from './components/DiagList.tsx';
import { LabResults } from './components/LabResults.tsx';
import { mockPatientData, patientsList } from './utils/mockData.ts';
import { Navbar } from './components/Nav.tsx';

function App() {
  const [selectedPatientId, setSelectedPatientId] = useState(mockPatientData.id);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <PatientsList
              patients={patientsList}
              selectedPatientId={selectedPatientId}
              onPatientSelect={setSelectedPatientId}
            />
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <BloodPressureChart data={mockPatientData.bloodPressure} />
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <DiagnosticList diagnostics={mockPatientData.diagnosticList} />
                  
                </div>
              </div>
              <div className="md:col-span-1 gap-4">
                <div className="mb-3"><PatientInfo 
                  name={mockPatientData.name}
                  age={mockPatientData.age}
                  gender={mockPatientData.gender}
                /></div>
                <LabResults results={mockPatientData.labResults} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;