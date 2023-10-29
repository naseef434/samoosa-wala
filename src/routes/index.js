import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/login';
import DashBoard from '../pages/dashboard'
import SaleOrReturn from "../pages/saleOrReturn/index"
export default function index() {
  return (
    
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashBoard" element={<DashBoard />} />
        <Route path="/saleOrReturn" element={<SaleOrReturn />} />

    </Routes>
  )
}
