import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 


import '@fontsource/roboto'; 
import { CarritoProvider } from './context/CarritoContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <CarritoProvider> {}
      <div className="bg-light min-vh-100"> {}
        <App />
      </div>
    </CarritoProvider>
  </React.StrictMode>
);

reportWebVitals();
