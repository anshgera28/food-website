import React from "react";
import "./App.css";
import "./index.css";
import Home from "./pages/home";
import UserProvider from "./context/UserProvider"; // ✅ Correct Import

function App() {
  return (
    <UserProvider> {/* ✅ Wrap with Provider */}
      <Home />
    </UserProvider>
  );
}

export default App;
