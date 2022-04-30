import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from "./Context/StateProvider";
import Reducer, { initialState } from "./Context/Reducer";

ReactDOM.render(
  <React.StrictMode>
    {/* THIS IS A STATE PROVIDER ITS WORK LIKE A OBJECT ITS BELONGS TO StateProvider COMPONENT */}
    {/* THIS "initialState" COMES FROM REDUCER COMPONENT */}
    {/* THIS "Reducer" COMES FROM REDUCER COMPONENT */}
    <StateProvider reducer={Reducer} initialState={initialState} >
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
