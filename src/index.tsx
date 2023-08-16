import './assets/fonts/Monserrat/static/Montserrat-Black.ttf'
import './assets/fonts/Monserrat/static/Montserrat-Bold.ttf'
import './assets/fonts/Monserrat/static/Montserrat-ExtraBold.ttf'
import './assets/fonts/Monserrat/static/Montserrat-ExtraLight.ttf'
import './assets/fonts/Monserrat/static/Montserrat-Light.ttf'
import './assets/fonts/Monserrat/static/Montserrat-Medium.ttf'
import './assets/fonts/Monserrat/static/Montserrat-Regular.ttf'
import './assets/fonts/Monserrat/static/Montserrat-SemiBold.ttf'
import './assets/fonts/Monserrat/static/Montserrat-Thin.ttf'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
