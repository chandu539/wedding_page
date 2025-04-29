// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage'; // Import WelcomePage component
import Wedding from './Wedding'; // Import Wedding component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} /> {/* Welcome page route */}
        <Route path="/wedding" element={<Wedding />} /> {/* Wedding page route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
