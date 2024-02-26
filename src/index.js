import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import '../src/styles.css';
// import './styles.min.css';
import './Portfolio_list.css';
import './Details.css';
import './Dashboard/Admin/Departments.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './Context/AuthContext';
import { IdProvider } from './Context/FilterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <IdProvider>
  <BrowserRouter>
     <App />
  </BrowserRouter>
  </IdProvider>
  
  </AuthProvider>
 
);

reportWebVitals();
