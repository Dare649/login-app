import React from 'react'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sign from './Sign'

const Apps = () => {
  return (
    <BrowserRouter>
        <Routes>
                <Route path="/" element={ < App/>}/>
                <Route path="Sign" element={ < Sign/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Apps
