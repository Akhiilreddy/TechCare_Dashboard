import axios from 'axios';
import { useEffect, useState } from 'react';
import { credentials } from '../utils/login';
import BirthIcon from '../assets/BirthIcon.svg';
import FemaleIcon from '../assets/FemaleIcon.svg';
import InsuranceIcon from '../assets/InsuranceIcon.svg';
import PhoneIcon from '../assets/PhoneIcon.svg';

export const PatientInfo = () => {

  const [patientInfo, setPatientInfo] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
          headers: {
            Authorization: `Basic ${credentials}`
          }
        });
        
        setPatientInfo(res.data[3]);
      } catch (err) {
        console.error("Error fetching: ", err);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img 
        src={patientInfo.profile_picture}
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{patientInfo.name}</h2>
      <div className="p-2 w-full space-y-4">

        <div className="pb-3 flex items-center"><img src={BirthIcon} className="w-10 h-10 mr-2"/> 
          <div>
            <div className="text-gray-600 font-medium w-48">Date Of Birth</div>
            <div className="text-gray-800 font-semibold">{patientInfo.date_of_birth}</div>
          </div>
        </div>

        <div className="pb-3 flex items-center"><img src={FemaleIcon} className="w-10 h-10 mr-2"/>
         <div>
          <div className="text-gray-600 font-medium w-48">Gender</div>
          <div className="text-gray-800 font-semibold">{patientInfo.gender}</div>
         </div>
        </div>

        <div className="pb-3 flex items-center"><img src={PhoneIcon} className="w-10 h-10 mr-2"/>
         <div>
          <div className="text-gray-600 font-medium w-48">Contact Info.</div>
          <div className="text-gray-800 font-semibold">{patientInfo.phone_number}</div>
         </div>
        </div>

        <div className="pb-3 flex items-center"><img src={PhoneIcon} className="w-10 h-10 mr-2"/>
         <div>
          <div className="text-gray-600 font-medium w-48">Emergency Contacts</div>
          <div className="text-gray-800 font-semibold">{patientInfo.emergency_contact}</div>
         </div>
        </div>

        <div className="flex items-center"><img src={InsuranceIcon} className="w-10 h-10 mr-2"/>
         <div>
          <div className="text-gray-600 font-medium w-64">Insurance Provider</div>
          <div className="text-gray-800 font-semibold">{patientInfo.insurance_type}</div>
         </div>
        </div>
         
        <div className="grid justify-items-center"> 
        <button className="bg-teal-400 hover:bg-teal-500 text-black font-medium py-2 px-8 rounded-full">
                Show All Information
        </button>
        </div>
      </div>
    </div>
  );
}