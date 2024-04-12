import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import BookingPage from './pages/BookingPage';
import Reservations from './pages/Reservations';
import UpdateDetails from './pages/UpdateDetails';

 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <Routes>
          
          <Route path="/" element={<BookingPage />}></Route>
          <Route path="/reservations" element={<Reservations />}></Route>
          <Route path="/updatedetails/:id" element={<UpdateDetails />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
