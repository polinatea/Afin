import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import "./style.css"
import "./index.css"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// browser router wrapping the entire content of page