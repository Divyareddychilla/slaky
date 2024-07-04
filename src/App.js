import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Analytics from './pages/Analytics';
import About from './pages/About';
import Header from './components/Header';
import TeamsLayout from '../src/components/TeamsLayout';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/analytics" element={<Sidebar><Analytics /></Sidebar>} />
          <Route path="/about" element={<Sidebar><About /></Sidebar>} />
          <Route path='/teams' element={<TeamsLayout />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;


