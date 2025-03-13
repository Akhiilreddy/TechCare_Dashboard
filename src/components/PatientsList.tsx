import axios from 'axios';
import { useEffect, useState } from 'react';
import Search from '../assets/Search.svg'
import MoreDots from '../assets/MoreDots.svg'
import { credentials } from '../utils/login';

interface Patient {
  id: string;
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
}

interface Props {
  selectedPatientId: string;
  onPatientSelect: (id: string) => void;
}

export const PatientsList = ({ patients, selectedPatientId, onPatientSelect }: Props) => {
  const [patientList, setPatientList] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
          headers: {
            Authorization: `Basic ${credentials}`
          }
        });
        
        setPatientList(res.data);
        onPatientSelect(res.data[3].name);
      } catch (err) {
        console.error("Error fetching: ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Patients</h2>
        <div className="relative">
          <img src={Search} />
        </div>
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {patientList.map((patient) => (
          <div
            key={patient.id}
            onClick={() => onPatientSelect(patient.name)}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
              selectedPatientId === patient.name ? 'bg-light-special-green' : 'hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center space-x-3">
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-800">{patient.name}</h3>
                <p className="text-sm text-gray-500">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <button className="text-gray-300 hover:text-gray-600">
              <img src={MoreDots} className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};