import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from 'contexts/GlobalProvider';
import { AuthProvider } from 'contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalProvider>
            <Router>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </Router>
        </GlobalProvider>
    </React.StrictMode>
);
