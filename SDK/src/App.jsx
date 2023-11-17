import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SDK_Form from "./Component/SDK_Form";
import SDK_Test from "./Component/SDK_Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SDK_Form />} />
        <Route path="/signin" element={<SDK_Test />} />
      </Routes>
    </Router>
  );
}

export default App;
