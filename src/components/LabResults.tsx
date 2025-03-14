import axios from 'axios';
import { useEffect, useState } from 'react';
import { credentials } from '../utils/login';
import Download from '../assets/Download.svg'

export const LabResults = () => {

  const [labResults, setLabResults] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
          headers: {
            Authorization: `Basic ${credentials}`
          }
        });
        
        setLabResults(res.data[3].lab_results);
      } catch (err) {
        console.error("Error fetching: ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white mt-4 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6">Lab Results</h3>
      <div className="space-y-3">
        {labResults.map((category, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
          >
            <span className="text-gray-800">{category}</span>
            <img src={Download} />
          </div>
        ))}
      </div>
    </div>
  );
};