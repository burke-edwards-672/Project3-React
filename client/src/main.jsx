//Putting these two imports here is how I can control the priority of stylesheets.
//These two will come before the page & component ones, allowing them to be easily overwritten (which I want!)
//Combining that with the "precedence" prop in the links below for bootstrap and google font, which will set themselves above these ones.
import "./styling/layout.css";
import './styling/base.css';
import './styling/light.css';
import './styling/dark.css';
import App from './App.jsx';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    <link
    precedence="low"
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
    integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
    crossOrigin="anonymous"
    />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link 
    precedence="medium" 
    href="https://fonts.googleapis.com/css2?family=Boogaloo&family=Mansalva&display=swap" 
    rel="stylesheet" />
  </StrictMode>,
)
