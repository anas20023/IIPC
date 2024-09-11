/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/navbar.tsx';
import Center from './Components/center.tsx';
import Winner from './Components/winners.tsx';
import Footer from './Components/footer.tsx';
import ParticipantPage from './Components/Participents.tsx';
import Volunteers from './Components/Volunteers.tsx';
import './index.css';

function DefaultLayout() {
  const location = useLocation();

  // Determine if Winner should be rendered
  const shouldRenderDefault = location.pathname !== '/Participant' && location.pathname !== '/Volunteers';

  return (
    <>
      <Navbar />
      <Center />
      {shouldRenderDefault && <Winner />}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<div />} /> {/* Default content */}
        <Route path="Participant" element={<ParticipantPage />} />
        <Route path="Volunteers" element={<Volunteers />} />
        {/* Add other routes here as needed */}
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
