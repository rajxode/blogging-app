
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';


import { Provider } from 'react-redux';
import { store } from './store/store.js';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* render the app component */}
    {/* redux store  */}
    <Provider store={store} >
      <PersistGate persistor={persistor} >
        {/* for toast notifications */}
        <ToastContainer autoClose={2000}/>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
