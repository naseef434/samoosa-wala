import React, { useEffect, useState } from 'react'
import DashBoard from './DashBoard'
import { selectbydaterange } from '../../config/services/apis';

export default function Index() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [date, setdate] = useState(null)
  const [dateEnd, setdateEnd] = useState(null)



  const handleStartDateChange = (event) => {
    setdate(event.target.value)
    const startDate = new Date(event.target.value);
    const formattedStartDate = startDate?.toISOString();
    setStartDate(formattedStartDate);
  };

  const handleEndDateChange = (event) => {
    setdateEnd(event.target.value)
    const startDate = new Date(event.target.value);
    const formattedStartDate = startDate?.toISOString();
    setEndDate(formattedStartDate);

  };

  const [dataS, setdataS] = useState([])

  const selectByDateRangeFunction = async () => {
    try {
      const result = await selectbydaterange({startDate,endDate});
      setdataS(result);
    } catch (error) {
      console.error("Error fetching data for tab 0:", error);
    }
  };
  useEffect(() => {
   selectByDateRangeFunction()
  }, [endDate])

console.log({dataS});

  return (
    <>
      <DashBoard
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
        date={date}
        dateEnd={dateEnd}
        dataS={dataS}
      />
    </>
  )
}
