import { PatientsList } from './components/PatientsList';
import { PatientInfo } from './components/PatientInfo';
import { DiagnosisHistory } from './components/DiagnosisHistory.tsx';
import { DiagnosticList } from './components/DiagList.tsx';
import { LabResults } from './components/LabResults.tsx';
import { Navbar } from './components/Nav.tsx';

function App() {

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar />
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3 w-full">
            <PatientsList/>
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <DiagnosisHistory />
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <DiagnosticList />
                </div>
              </div>
              <div className="md:col-span-1 flex flex-col gap-4">
                <div className="mb-3">
                  <PatientInfo />
                </div>
                <LabResults />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;