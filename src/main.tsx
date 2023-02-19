import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!)?.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
