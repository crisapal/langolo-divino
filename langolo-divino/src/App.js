import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WinesManagement from './components/WinesManagement';
import WinesList from './components/WinesList';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Wines List</Link>
            </li>
            <li>
              <Link to="/wines-management">Manage Wines</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<WinesList />} />
          <Route path="/wines-management" element={<WinesManagement />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;