import axios from 'axios';
import { useEffect, useState } from 'react';
import { credentials } from '../utils/login';
import Search from '../assets/Search.svg'
import MoreDots from '../assets/MoreDots.svg'

interface Patient {
  id: string;
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
}


export const PatientsList = () => {
  const [patientList, setPatientList] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
          headers: {
            Authorization: `Basic ${credentials}`
          }
        });
        
        setPatientList(res.data);
        setSelectedPatient(res.data[3]);
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
      <div className="space-y-4 h-screen overflow-y-auto">
        {patientList.map((patient, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
              selectedPatient?.name === patient.name ? 'bg-light-special-green' : 'bg-white'
            }`}
            onClick={() => setSelectedPatient(patient)}          
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