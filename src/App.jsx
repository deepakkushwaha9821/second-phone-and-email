import React from "react";  
import "./index.css";   
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Phone from "./Phone";  
import Email from "./Email"; // Importing Email component  

const App = () => {  
  return (  
    <BrowserRouter>  
      <Routes>  
        <Route path="/" element={<Phone />} />  
        <Route path="/email" element={<Email />} />  
      </Routes>  
    </BrowserRouter>  
  );  
};  

export default App;