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

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  const location = useLocation();

  // Determine if Winner should be rendered
  const shouldRenderWinner = location.pathname !== '/Participant' && location.pathname !== '/Volunteers';

  return (
    <>
      <Navbar />
      <Center />
      {shouldRenderWinner && <Winner />}
      <Routes>
        <Route path="/Participant" element={<ParticipantPage />} />
        <Route path="/Volunteers" element={<Volunteers />} />
        {/* Uncomment or add routes as needed */}
        {/* <Route path="/Winner" element={<Winner />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
