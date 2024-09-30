/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation, Outlet } from 'react-router-dom';
import Navbar from './Components/navbar.tsx';
import Center from './Components/center.tsx';
import Winner from './Components/winners.tsx';
import Footer from './Components/footer.tsx';
import ParticipantPage from './Components/Participents.tsx';
import Volunteers from './Components/Volunteers.tsx';
import './index.css';

function DefaultLayout() {
  const location = useLocation();
  const isDefaultRoute = location.pathname === '/'; // Ensures the default route condition is handled

  return (
    <>
      <Navbar />
      <Center />
      {isDefaultRoute && <Winner />} {/* Display Winner component only on the default route */}
      <Outlet /> {/* This will render child routes */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<div />} /> {/* Empty element for the default route */}
        <Route path="Participant" element={<ParticipantPage />} />
        <Route path="Volunteers" element={<Volunteers />} />
        {/* Other routes can be added here as needed */}
      </Route>
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
