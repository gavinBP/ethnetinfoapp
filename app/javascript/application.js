// Entry point for the build script in your package.json
// app/javascript/application.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './components/HomePage';

console.log('wtf');

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('home-page');
  if (container) {
    const root = createRoot(container);
    root.render(<HomePage />);
  }
});
