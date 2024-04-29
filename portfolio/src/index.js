import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Capstone from "./pages/Capstone"
import Nerdherd from "./pages/Nerdherd"
import AttendanceTracker from "./pages/AttendanceTracker"
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />}/>
          <Route path="resume" element={<Resume />}/>
          <Route path="about" element={<About />}/>
          <Route path="portfolio" element={<Portfolio />}/>
          <Route path="portfolio/capstone" element={<Capstone />}/>
          <Route path="portfolio/nerd-herd" element={<Nerdherd />}/>
          <Route path="portfolio/attendancetracker" element={<AttendanceTracker />}/>
        </Route>
      </Routes>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)