import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import '../src/styles.css';
// import './styles.min.css';
import './Portfolio_list.css';
import './Details.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
   <BrowserRouter>
     <App />
  </BrowserRouter>
  </AuthProvider>
 
);

reportWebVitals();
