import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from './hook/store/store.js';

import './index.css'
import Mydex from './page/Mydex.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Mydex />
    </Provider>
  </React.StrictMode>,
)
