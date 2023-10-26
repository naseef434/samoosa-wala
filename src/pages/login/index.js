import React, { Fragment, useEffect, useState } from 'react'
import LoginComponent from './LoginComponent'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// import { useTab } from '../../ApiDataContext';

export default function Index() {
  let navigate = useNavigate();
  const [formData, setformData] = useState()
  const [error, setError] = useState()
  const [responses, setResponses] = useState([])
  // const { tabIndex, setTabIndex, orgDatas, setOrgDatas } = useTab();

  // handle input field change
  const handleInputFieldChange = (e) => {
    error && setError(false)
    const { name, value } = e.target
    setformData({
      ...formData,
      [name]: value
    })
  }


  // // handle submit  
  const handleSubmit = async (e) => {
    axios.post('https://i2qpn3ygos75sdvwqrkzqvzdia0fmjvu.lambda-url.ap-south-1.on.aws/login', {
      userName: "SmsaSales",
      password: "Bismillah",
      // access_key: "grit-b2f5d2ec-36a1-4e68-8f93-19b0f729a4d3"
    })
      .then(function (response) {
    
        localStorage.setItem("session",response?.data?.session)
        response?.status === 200 && navigate("/dashboard");
      })
      .catch(function (error) {
        // handle error
        if (error?.response?.status === 403) {
          setError(true)
        } else {
          console.log("something went wrong");
        }
      })
  }


  return (
    <Fragment>
      <LoginComponent
        handleInputFieldChange={handleInputFieldChange}
        handleSubmit={handleSubmit}
        error={error}
        setError={setError}
      />
    </Fragment>
  )
}
