import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/login';
import DashBoard from '../pages/dashboard'

export default function index() {
  return (
    
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashBoard" element={<DashBoard />} />
    </Routes>
  )
}
