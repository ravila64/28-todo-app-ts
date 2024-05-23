import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

//import 'todomvc-app-css/index.css' 
import './index.css'

// estaba createRoot(document.getElementById('root')!).render()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
