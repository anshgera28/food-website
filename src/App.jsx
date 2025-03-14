import React from 'react';
import './App.css';
import './index.css';
import Home from './pages/home';
import UserContext from './context/UserContext'; // ✅ Import UserContext

function App() {
  return (
    <UserContext> {/* ✅ Wrap Home with UserContext */}
      <Home />
    </UserContext>
  );
}

export default App;
