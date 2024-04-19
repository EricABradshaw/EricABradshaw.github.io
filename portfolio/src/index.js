import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Resume />}/>
          <Route path="resume" element={<Resume />}/>
          <Route path="about" element={<About />}/>
          <Route path="portfolio" element={<Portfolio />}/>
        </Route>
      </Routes>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)