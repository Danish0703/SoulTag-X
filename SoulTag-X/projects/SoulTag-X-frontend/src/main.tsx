import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { WalletProvider } from './context/WalletContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </React.StrictMode>
)
