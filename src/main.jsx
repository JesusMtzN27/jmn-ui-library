import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider, theme } from 'antd'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: '#030712',
          colorBgContainer: '#111827',
          colorBorder: '#1f2937',
          colorText: '#e5e7eb',
          colorTextSecondary: '#9ca3af',
          colorPrimary: '#3b82f6',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
