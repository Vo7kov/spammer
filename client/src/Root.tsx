import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { App } from './App';
import { HomePage } from './pages';

export const Root: React.FC = React.memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
