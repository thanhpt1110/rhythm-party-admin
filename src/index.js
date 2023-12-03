import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'contexts/GlobalProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalProvider>
            <Router>
                <App />
            </Router>
        </GlobalProvider>
    </React.StrictMode>
);
