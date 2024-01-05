import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import {RecoilRoot, RecoilEnv} from 'recoil';
import { CookiesProvider } from 'react-cookie';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
  <CookiesProvider>
  <React.StrictMode>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  </React.StrictMode>
  </CookiesProvider>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
