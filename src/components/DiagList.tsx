import axios from 'axios';
import { credentials } from '../utils/login';
import { DiagnosticRecord } from '../types';
import { useEffect, useState } from 'react';

interface Props {
  diagnostics: DiagnosticRecord[];
}

export const DiagnosticList = ({ diagnostics }: Props) => {
  const [apiDiagnostics, setApiDiagnostics] = useState<DiagnosticRecord[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
          headers: {
            Authorization: `Basic ${credentials}`
          }
        });
        
        setApiDiagnostics(res.data[8].diagnostic_list);
      } catch (err) {
        console.error("Error fetching: ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6">Diagnostic List</h3>
      <div className="max-h-72 overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-200 sticky top-0 z-10 rounded-full">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Problem/Diagnosis</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Description</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {apiDiagnostics.length > 0 ? (apiDiagnostics.map((diag, index) => (
            <tr key={index}>
              <td className="py-3 px-4 text-sm text-gray-800">{diag.name}</td>
              <td className="py-3 px-4 text-sm text-gray-600">{diag.description}</td>
              <td className="py-3 px-4 text-sm text-gray-600">
              {diag.status}
              </td>
            </tr>
            ))):""}
          </tbody>
        </table>
      </div>
    </div>
  );
};