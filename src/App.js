import React from "react";
import { Route, Routes } from "react-router-dom";
import Portfolio from './pages/main';
import Works from "./pages/works";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Portfolio/>}/>
        <Route path="/works" element={<Works/>}/>
      </Routes>
    </div>
  );
}

export default App;
