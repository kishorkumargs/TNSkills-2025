"use client"

import { useState } from 'react';
import VehicleList from '@/components/VehicleList';

export default function Home() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold">Dashboard</h1>
        <p>Book New Trip</p>
      </div>
      <div className="flex flex-row gap-2">
        <label 
          className="bg-white text-black"
          htmlFor="start-date"
          >
          <input type="date" 
            name="start-date"
            onChange={(e) => { setStartDate(e.target.valueAsDate)}}
            />
        </label>
        <label 
          className="bg-white text-black" 
          htmlFor="end-date"
          onChange={(e) => { setEndDate(e.target.valueAsDate)}}
          >
          <input type="date" 
            name="end-date"
            />
        </label>
        <VehicleList startDate={startDate} endDate={endDate}/>
      </div>
    </div>
  );
}
