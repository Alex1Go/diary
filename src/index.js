import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/diary">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
// // import { persistor, store } from './redux/store.js';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { App } from 'App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider >
//       <PersistGate loading={null} >
//         <BrowserRouter basename="/diary">
//           <App />
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
