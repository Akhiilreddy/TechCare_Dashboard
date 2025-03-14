import {Line} from 'react-chartjs-2';
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
import { CardComponent } from './CardComponent';
import RespiratoryRate from '../assets/respiratory rate.svg'
import Temperature from '../assets/temperature.svg'
import HeartBPM from '../assets/HeartBPM.svg'

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
  const [respiratoryRate, setRespiratoryRate] = useState<number>();
  const [temperature, setTemperature] = useState<number>();
  const [heartRate, setHeartRate] = useState<number>();
  

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
      setSystolicAvg(apiData[0].blood_pressure.diastolic);
      setDiastolicAvg(apiData[0].blood_pressure.diastolic);

      setRespiratoryRate(apiData[0].respiratory_rate);
      setTemperature(apiData[0].temperature);
      setHeartRate(apiData[0].heart_rate);
      
    }
  }, [apiData])
  

  const chartData = apiData ? {
    labels: apiData.map((x: any) => `${x.month}, ${x.year}`),
    datasets: [
      {
        label: 'Systolic',
        data: apiData.map((x: any) => x.blood_pressure.systolic.value),
        borderColor: '#FF69B4',
        backgroundColor: '#FF69B4',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#FF69B4',
      },
      {
        label: 'Diastolic',
        data: apiData.map((x: any) => x.blood_pressure.diastolic.value),
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
          <p className="text-2xl font-bold">Diagnosis History</p>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Systolic</span>
            <span className="text-lg font-bold">{systolicAvg?.value}</span>
            <span className="text-sm text-gray-500">{systolicAvg?.levels}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Diastolic</span>
            <span className="text-lg font-bold">{diastolicAvg?.value}</span>
            <span className="text-sm text-gray-500">{diastolicAvg?.levels}</span>
          </div>
        </div>
        <select className="border rounded-md px-3 py-1 text-sm flex items-center justify-center">
          <option>Last 6 months</option>
        </select>
      </div>
      <Line data={chartData} options={options} className="w-64 h-64 bg-special-purple" />
      <div className="flex gap-4 p-4">
        <CardComponent title={"Respiratory rate"} value={respiratoryRate?.value} status={respiratoryRate?.levels} icon={RespiratoryRate} bgColor={"bg-special-blue"} />
        <CardComponent title={"Temperature"} value={temperature?.value} status={temperature?.levels} icon={Temperature} bgColor={"bg-special-orange"} />
        <CardComponent title={"Heart Rate"} value={heartRate?.value} status={heartRate?.levels} icon={HeartBPM} bgColor={"bg-special-pink"} />
      </div>
    </div>
  );
}