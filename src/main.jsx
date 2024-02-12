import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthProviderWrapper } from './context/auth.context.jsx';
import { JourneyProviderWrapper } from './context/journey.context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <JourneyProviderWrapper>
      <AuthProviderWrapper>
        <App />
      </AuthProviderWrapper>
      </JourneyProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
)
