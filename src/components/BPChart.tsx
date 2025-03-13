import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { credentials } from '../utils/login';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const BloodPressureChart = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [apiData, setApiData] = useState<any>(undefined);
  const [systolicAvg, setSystolicAvg] = useState<number>();
  const [diastolicAvg, setDiastolicAvg] = useState<number>();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
          headers: {
            Authorization: `Basic ${credentials}`
          }
        });
        setApiData(res.data[3].diagnosis_history.slice(0,6));
      } catch (err) {
        console.error("Error fetching: ", err);
      }
    };

    
    
    fetchData();
  }, []);

  useEffect(() => {
    if(apiData) {
      console.log("apidata: ",apiData);
      const totalSystolic = apiData.reduce((sum: number, entry: any) => sum + entry.blood_pressure.systolic.value, 0);
      const totalDiastolic = apiData.reduce((sum: number, entry: any) => sum + entry.blood_pressure.diastolic.value, 0);

      const avgSystolic = parseFloat((totalSystolic / apiData.length).toFixed(0));
      const avgDiastolic = parseFloat((totalDiastolic / apiData.length).toFixed(0));

      setSystolicAvg(avgSystolic);
      setDiastolicAvg(avgDiastolic);
    }
  }, [apiData])
  

  const chartData = apiData ? {
    labels: apiData.map((entry: any) => `${entry.month}, ${entry.year}`),
    datasets: [
      {
        label: 'Systolic',
        data: apiData.map((entry: any) => entry.blood_pressure.systolic.value),
        borderColor: '#FF69B4',
        backgroundColor: '#FF69B4',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#FF69B4',
      },
      {
        label: 'Diastolic',
        data: apiData.map((entry: any) => entry.blood_pressure.diastolic.value),
        borderColor: '#8A2BE2',
        backgroundColor: '#8A2BE2',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#8A2BE2',
      },
    ],
  } : {
    label: [],
    datasets: []
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      title: {
        display: true,
        text: 'Blood Pressure',
        align: 'start' as const,
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: {
          bottom: 30,
        },
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
        grid: {
          color: '#f0f0f0',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Systolic</span>
            <span className="text-2xl font-bold">{systolicAvg}</span>
            <span className="text-sm text-gray-500">Higher than Average</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Diastolic</span>
            <span className="text-2xl font-bold">{diastolicAvg}</span>
            <span className="text-sm text-gray-500">Lower than Average</span>
          </div>
        </div>
        <select className="border rounded-md px-3 py-1 text-sm">
          <option>Last 6 months</option>
          <option>Last year</option>
          <option>Last 2 years</option>
        </select>
      </div>
      <Line data={chartData} options={options} className="h-64" />
    </div>
  );
}