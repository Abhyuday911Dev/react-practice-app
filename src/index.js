import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './Stylesheets/style.css';
import Mycontext from "./Context/Mycontext";
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Mycontext>
            <App />
        </Mycontext>
    </BrowserRouter>
);