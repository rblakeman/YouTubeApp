import React from 'react';
import { createRoot } from 'react-dom/client';

import './style.css';
import App from './app';

const container = document.getElementById('root');
const root = createRoot(container);

// Take this component's generated HTML and put it on the page (in the DOM)
root.render(<App />);
