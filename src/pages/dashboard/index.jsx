import React, { useEffect, useState } from 'react'
import DashBoard from './DashBoard'

export default function Index() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (event) => {
    alert("")
      const startDate = new Date(event.target.value);
      const formattedStartDate = startDate?.toISOString();
      setStartDate(formattedStartDate);
  };

  const handleEndDateChange = (event) => {
      const startDate = new Date(event.target.value);
      const formattedStartDate = startDate?.toISOString();
      setEndDate(formattedStartDate);
      
  };

 
  useEffect(() => {
   alert("connect api")
  }, [])
  

 
  return (
    <>
      <DashBoard 
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
      />
    </>
  )
}
