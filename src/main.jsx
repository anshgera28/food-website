import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import UserProvider from "./context/UserProvider"; // ✅ Import UserProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <UserProvider> {/* ✅ Wrap App inside UserProvider */}
      <App />
    </UserProvider>

);
