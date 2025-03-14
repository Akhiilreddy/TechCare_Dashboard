import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Home from '../assets/Home.svg'
import Patients from '../assets/Patients.svg'
import Calendar from '../assets/Calendar.svg'
import Message from '../assets/Message.svg'
import CreditCard from '../assets/CreditCard.svg'
import TechCare from '../assets/TechCare.svg'
import Settings from '../assets/Settings.svg'
import MoreDots from '../assets/MoreDots.svg'
import { credentials } from '../utils/login';

export const Navbar = () => {

  const [docInfo, setdocInfo] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
          headers: {
            Authorization: `Basic ${credentials}`
          }
        });
        
        setdocInfo(res.data[8]);
      } catch (err) {
        console.error("Error fetching: ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <nav className="bg-white shadow-md px-6 py-2 mb-6 rounded-full">
      <div className="max-w-full mx-auto grid grid-cols-12 items-center">
        
        <div className="col-span-3 flex items-center">
          <img src={TechCare} className="w-48 h-12"/>
        </div>

        <div className="col-span-6 flex justify-center space-x-6">
          <NavLink icon={Home} text="Overview" />
          <NavLink icon={Patients} text="Patients" active />
          <NavLink icon={Calendar} text="Schedule" />
          <NavLink icon={Message} text="Message" />
          <NavLink icon={CreditCard} text="Transactions" />
        </div>

        <div className="col-span-3 flex justify-end items-center gap-4">
          <img
            src={docInfo.profile_picture}
            alt="Doctor profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-gray-800">{'Dr. '}{docInfo.name}</div>
            <div className="text-sm text-gray-500">General Practitioner</div>
          </div>
          <div className="flex items-center">
            <NavLink icon={Settings} />
            <NavLink icon={MoreDots} />
          </div>
        </div>
        
      </div>
  </nav>
  );
};

const NavLink = ({ icon, text, active = false }: { icon: React.ReactNode; text?: string; active?: boolean }) => {
  return (
    <a
      href="#"
      className={`flex items-center px-4 py-2 font-semibold rounded-full ${
        active ? 'bg-special-green text-black' : 'text-black hover:bg-gray-200'
      }`}
    >
      <img src={icon} className="w-4 h-4 mr-1"/>
      <span>{text}</span>
    </a>
  );
};