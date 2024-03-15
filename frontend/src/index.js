import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import { disableReactDevTools } from "@fvilers/disable-react-devtools"
 
if(process.env.NODE_ENV === "production") disableReactDevTools

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
