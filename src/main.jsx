import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PortfolioProvider } from './contexts/PortfolioContext.jsx'
import { WebsProvider } from './contexts/WebsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PortfolioProvider>
    <WebsProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </WebsProvider>
  </PortfolioProvider>
)
